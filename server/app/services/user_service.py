from datetime import datetime, timedelta
from fastapi import HTTPException
from app.core.database import get_connection
from app.core.token import generate_verify_token
from app.core.email import send_verification_email
# from app.core.security import hash_password

from mysql.connector import IntegrityError
from fastapi import HTTPException
from fastapi import HTTPException
from datetime import datetime, timedelta
import re

def register_student(student):
    conn = get_connection()
    cursor = conn.cursor()

    # 1️⃣ Email domain check
    if not student.email.endswith("@kongu.edu"):
        raise HTTPException(
            status_code=400,
            detail="Only @kongu.edu email addresses are allowed"
        )

    try:
        # 2️⃣ Check if email already VERIFIED (students table)
        cursor.execute(
            "SELECT 1 FROM users WHERE email = %s",
            (student.email,)
        )
        if cursor.fetchone():
            raise HTTPException(
                status_code=409,
                detail="Email already registered and verified"
            )

        # 3️⃣ Generate token
        token = generate_verify_token(student.email)
        expires_at = datetime.utcnow() + timedelta(hours=24)

        # 4️⃣ Insert into pending_students
        cursor.execute(
            """
            INSERT INTO pending_students
            (email, roll_no, password, role, verify_token, expires_at)
            VALUES (%s, %s, %s, %s, %s, %s)
            """,
            (
                student.email,
                student.roll_no,
                student.password,   # unhashed as per your requirement
                student.role,
                token,
                expires_at
            )
        )

        conn.commit()

    except IntegrityError:
        # Covers duplicate email already pending verification
        raise HTTPException(
            status_code=409,
            detail="Verification already pending for this email"
        )

    finally:
        cursor.close()
        conn.close()

    # 5️⃣ Send verification email ONLY after DB success
    send_verification_email(student.email, token)

    return "Verification email sent successfully"


def verify_student(token: str):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute(
        """
        SELECT * FROM pending_students
        WHERE verify_token=%s AND expires_at > NOW()
        """,
        (token,)
    )

    pending = cursor.fetchone()
    if not pending:
        raise HTTPException(status_code=400, detail="Invalid or expired link")

    match = re.search(r"\d+([a-zA-Z]{2,4})@", pending["email"])

    cursor.execute(
        """
        INSERT INTO users (email, roll_no,password, role, dept, is_verified)
        VALUES (%s, %s,%s, %s, %s, %s)
        """,
        (
            pending["email"],
            pending["roll_no"],
            pending["password"],
            pending["role"],
            str(match.group(1)),
            True
        )
    )

    cursor.execute(
        "DELETE FROM pending_students WHERE id=%s",
        (pending["id"],)
    )

    conn.commit()
    cursor.close()
    conn.close()

    return "Email verified successfully"



def register_coordinator(student):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    try:
        # 1️⃣ Check if email already exists
        cursor.execute(
            "SELECT id FROM users WHERE email = %s",
            (student.email,)
        )
        existing = cursor.fetchone()

        if existing:
            raise HTTPException(
                status_code=409,
                detail="Email already exists"
            )

        # 2️⃣ Insert coordinator
        cursor.execute(
            """
            INSERT INTO users (email, roll_no, password, role, dept, is_verified)
            VALUES (%s, %s, %s, %s, %s, %s)
            """,
            (
                student.email,
                None,                 # roll_no not needed for coordinator
                student.email,     # not hashed (as per your design)
                student.role,
                student.dept,
                True                  # coordinator is auto-verified
            )
        )

        conn.commit()

    finally:
        cursor.close()
        conn.close()

    return "Coordinator registered successfully ✅"

