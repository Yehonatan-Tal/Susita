import jwt
import datetime
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

# uyuexpzompzmjhoo
# uyue xpzo mpzm jhoo
class AuthBL:
    def __init__(self):
        self.__key = "secret"
        self.__algorithm = "HS256"

    def create_jwt(self, email):
        payload = {
                   "email": email,
                   "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
                  }
        token = jwt.encode(payload, self.__key, algorithm="HS256")
        return token
    
    def send_registration_email(self, receiver_email, token):
        # Sender email and password (use a separate Gmail account for this)
        sender_email = "susita.app.mail@gmail.com"
        sender_password = "uyuexpzompzmjhoo"

        # Create a MIMEMultipart object and set up its headers
        message = MIMEMultipart()
        message["From"] = sender_email
        message["To"] = receiver_email
        message["Subject"] = "Susita Registration"

        # Create the registration link with the JWT
        registration_link = f"http://127.0.0.1:5000/register?token={token}"

        # Create the email body
        email_body = f"""\
        Hi,

        Welcome to Susita! To complete your registration, please click the link below:
        {registration_link}

        This link will expire in 1 hour.

        Thank you for joining Susita!
        """

        # Attach the email body to the message
        message.attach(MIMEText(email_body, "plain"))

        # Log in to the email server and send the email
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(sender_email, sender_password)
            server.sendmail(sender_email, receiver_email, message.as_string())



