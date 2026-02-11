from fastapi import HTTPException
from app.core.database import get_connection

def login(userID, password, search_by):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute(
        f"SELECT * FROM users WHERE {search_by} = %s",
        (userID,)
    )
    user = cursor.fetchone()

    cursor.close()
    conn.close()

    if not user:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    if user["password"] != password:
        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )

    if not user.get("is_verified", True):
        raise HTTPException(
            status_code=403,
            detail="Email not verified"
        )

    return f"Login successful for user {userID}, role: {user['role']}"
