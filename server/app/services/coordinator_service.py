
from fastapi import HTTPException
from app.core.database import get_connection


def get_all_coordinators():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute(
        """
        SELECT id, email, role, dept, is_verified, created_at
        FROM users
        WHERE role != 'student'
        """
    )

    coordinators = cursor.fetchall()

    cursor.close()
    conn.close()

    return coordinators


def update_coordinator(coordinator_id, data):
    conn = get_connection()
    cursor = conn.cursor()

    fields = []
    values = []

    for key, value in data.dict(exclude_unset=True).items():
        fields.append(f"{key}=%s")
        values.append(value)

    if not fields:
        raise HTTPException(status_code=400, detail="No fields to update")

    values.append(coordinator_id)

    cursor.execute(
        f"""
        UPDATE users
        SET {', '.join(fields)}
        WHERE id = %s AND role != 'student'
        """,
        tuple(values)
    )

    if cursor.rowcount == 0:
        raise HTTPException(
            status_code=404,
            detail="Coordinator not found or role is student"
        )

    conn.commit()
    cursor.close()
    conn.close()

    return "Coordinator updated successfully ✅"

def delete_coordinator(coordinator_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        DELETE FROM users
        WHERE id = %s AND role != 'student'
        """,
        (coordinator_id,)
    )

    if cursor.rowcount == 0:
        raise HTTPException(
            status_code=404,
            detail="Coordinator not found or role is student"
        )

    conn.commit()
    cursor.close()
    conn.close()

    return "Coordinator deleted successfully ❌"
