import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv
import os 

load_dotenv()

def send_verification_email(to_email, token):
    verify_link = f"http://127.0.0.1:8000/students/verify?token={token}"

    msg = EmailMessage()
    msg["Subject"] = "Verify your email"
    msg["From"] = os.getenv("EMAIL")
    msg["To"] = to_email
    msg.set_content(
        f"""
        Welcome 👋

        Please verify your email by clicking the link below:

        {verify_link}

        This link is valid for 10 minutes.
        """
    )

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(os.getenv("EMAIL"),os.getenv("PASSWORD") )
        server.send_message(msg)


def send_feedback_email(to_email_list):

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(os.getenv("EMAIL"), os.getenv("PASSWORD"))

        for to_email in to_email_list:

            msg = EmailMessage()
            msg["Subject"] = "Selected for Next Round 🎉"
            msg["From"] = os.getenv("EMAIL")
            msg["To"] = to_email

            msg.set_content(
                f"""
Congratulations 🎉

You have been selected for the next round.

Please provide your valuable feedback for your juniors.

Best of luck!
                """
            )

            server.send_message(msg)


def send_feedback_request_email(student_email: str, dept: str, round_no: int, company_name: str):

    msg = EmailMessage()
    msg["Subject"] = f"Feedback Request - {company_name}"
    msg["From"] = os.getenv("EMAIL")
    msg["To"] = student_email

    msg.set_content(
        f"""
Hello {student_email},

Greetings from {dept} Placement Coordinator.

You have attended Round {round_no} of {company_name}.

We kindly request you to share your valuable feedback to help your juniors prepare better.

Thank you for your support 😊

Best Regards,
{dept} Placement Team
"""
    )

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(os.getenv("EMAIL"), os.getenv("PASSWORD"))
        server.send_message(msg)