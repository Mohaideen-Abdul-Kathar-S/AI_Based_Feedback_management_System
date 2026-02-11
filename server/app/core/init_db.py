
from app.core.database import get_connection

def create_tables():
    conn = get_connection()
    if conn is None:
        return

    cursor = conn.cursor()

    create_users_table = """
    CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    roll_no VARCHAR(50),
    password VARCHAR(255),
    role VARCHAR(50),
    dept VARCHAR(4),
    is_verified BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
    """

    create_student_pending_table = """
CREATE TABLE IF NOT EXISTS pending_students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    roll_no VARCHAR(50),
    password VARCHAR(255),
    role VARCHAR(50),
    verify_token VARCHAR(255),
    expires_at DATETIME
);
"""

    create_company_table = """
CREATE TABLE IF NOT EXISTS companies (
    id VARCHAR(50) PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    type VARCHAR(20) NOT NULL,
    description TEXT,
    batch INT NOT NULL,
    rounds INT NOT NULL,
    next_round INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
"""

    create_round_result_table = """
CREATE TABLE IF NOT EXISTS round_result (
    rr_id VARCHAR(50) PRIMARY KEY,
    company_id VARCHAR(50) NOT NULL,
    round_no INT NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_round_company
        FOREIGN KEY (company_id)
        REFERENCES companies(id)
        ON DELETE CASCADE
);
"""

    cursor.execute(create_users_table)
    cursor.execute(create_student_pending_table)
    cursor.execute(create_company_table)
    cursor.execute(create_round_result_table)
    conn.commit()

    cursor.close()
    conn.close()
