from fastapi import HTTPException
from app.core.database import get_connection

def get_completed_companies(batch: int):
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    try:
        cursor.execute(
            """
            SELECT id, company_name
            FROM companies
            WHERE end_date < CURDATE()
            AND batch = %s
            """,
            (batch,)
        )

        companies = cursor.fetchall()

        if not companies:
            return []

        return companies

    finally:
        cursor.close()
        conn.close()


def get_round_statistics(company_id: str, dept: str):

    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    try:
        # 🔹 1️⃣ Get company details
        cursor.execute(
            """
            SELECT company_name, rounds
            FROM companies
            WHERE id = %s
            """,
            (company_id,)
        )
        company = cursor.fetchone()

        if not company:
            raise HTTPException(status_code=404, detail="Company not found")

        total_rounds = company["rounds"]

        result = []

        # 🔹 2️⃣ For each round calculate counts
        for r in range(1, total_rounds + 1):

            # ✅ Total students in that round
            cursor.execute(
                """
                SELECT COUNT(*) as total_count
                FROM round_result
                WHERE company_id = %s AND round_no = %s
                """,
                (company_id, r)
            )
            kec_count = cursor.fetchone()["total_count"]

            cursor.execute(
                """
                SELECT s.email
                FROM round_result rr
                JOIN users s ON rr.email = s.email
                WHERE rr.company_id = %s
                AND rr.round_no = %s
                AND s.dept = %s
                """,
                (company_id, r, dept)
            )

            students = [row["email"] for row in cursor.fetchall()]
            dept_count = len(students)

            result.append({
                "kec": kec_count,
                "dept": dept_count,
                "students": students
            })


    finally:
        cursor.close()
        conn.close()

    return {
        "company_id": company_id,
        "company_name": company["company_name"],
        "rounds": result
    }
