from fastapi import HTTPException
from app.core.database import get_connection
from mysql.connector import IntegrityError

def create_company(company):
    conn = get_connection()
    cursor = conn.cursor()

    try:
        cursor.execute(
            """
            INSERT INTO companies
            (id, company_name, type, description, batch, rounds, next_round, start_date, end_date)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
            """,
            (
                company.id,
                company.company_name,
                company.type,
                company.description,
                company.batch,
                company.rounds,
                company.next_round,
                company.start_date,
                company.end_date
            )
        )
        conn.commit()
    except IntegrityError:
        raise HTTPException(status_code=409, detail="Company already exists")
    finally:
        cursor.close()
        conn.close()

    return "Company created successfully"


def get_all_companies():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("SELECT * FROM companies")
    companies = cursor.fetchall()

    cursor.close()
    conn.close()

    return companies


def update_company(company_id, company):
    conn = get_connection()
    cursor = conn.cursor()

    fields = []
    values = []

    for key, value in company.dict(exclude_unset=True).items():
        fields.append(f"{key}=%s")
        values.append(value)

    if not fields:
        raise HTTPException(status_code=400, detail="No fields to update")

    values.append(company_id)

    cursor.execute(
        f"""
        UPDATE companies
        SET {', '.join(fields)}
        WHERE id=%s
        """,
        tuple(values)
    )

    if cursor.rowcount == 0:
        raise HTTPException(status_code=404, detail="Company not found")

    conn.commit()
    cursor.close()
    conn.close()

    return "Company updated successfully"


def delete_company(company_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM companies WHERE id=%s",
        (company_id,)
    )

    if cursor.rowcount == 0:
        raise HTTPException(status_code=404, detail="Company not found")

    conn.commit()
    cursor.close()
    conn.close()

    return "Company deleted successfully"
