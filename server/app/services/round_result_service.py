import pandas as pd
import uuid
from fastapi import HTTPException
from app.core.database import get_connection
from app.core.email import send_feedback_email


def process_excel(company_id: str, round_no: int, file):

    if not file.filename.endswith(".xlsx"):
        raise HTTPException(status_code=400, detail="Only .xlsx files allowed")

    try:
        # Read Excel file
        df = pd.read_excel(file.file)

    except Exception:
        raise HTTPException(status_code=400, detail="Invalid Excel file")

    # 🔹 Check if email column exists
    if "email" not in df.columns and 'roll_no' not in df.columns:
        raise HTTPException(
            status_code=400,
            detail="Excel must contain 'email' or 'roll_no' column"
        )
    conn = get_connection()
    cursor = conn.cursor()
    
    try:
        # 🔹 Convert roll_no → email if needed
        if "email" not in df.columns and "roll_no" in df.columns:
            roll_nos = df["roll_no"].dropna().unique()

            if len(roll_nos) == 0:
                raise HTTPException(status_code=400, detail="No roll numbers found")

            placeholders = ",".join(["%s"] * len(roll_nos))

            cursor.execute(
                f"""
                SELECT email FROM users
                WHERE roll_no IN ({placeholders})
                """,
                tuple(roll_nos)
            )

            results = cursor.fetchall()
            emails = [row[0] for row in results]

        else:
            df = df.dropna(subset=["email"])
            emails = df["email"].unique()

        if len(emails) == 0:
            raise HTTPException(status_code=400, detail="No emails found")

        inserted_count = 0

  
        for email in emails:

            # Optional: validate domain
            if not str(email).endswith("@kongu.edu"):
                continue  # skip invalid domain

            rr_id = str(uuid.uuid4())

            cursor.execute(
                """
                INSERT INTO round_result (rr_id, company_id, round_no, email)
                VALUES (%s, %s, %s, %s)
                """,
                (rr_id, company_id, round_no, email)
            )

            inserted_count += 1
        
        cursor.execute(
            """
            UPDATE companies
            SET next_round = %s
            WHERE id = %s
            """,
            (round_no + 1, company_id)
        )

        conn.commit()

        send_feedback_email(emails)

    finally:
        cursor.close()
        conn.close()

    return f"{inserted_count} students inserted successfully ✅"
