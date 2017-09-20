from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse
from twilio.rest import Client

app = Flask(__name__)


def hello_monkey():
    """Respond to incoming calls with a simple text message."""

    resp = MessagingResponse().message("Hello, Mobile Monkey")
    return str(resp)

# /usr/bin/env python
# Download the twilio-python library from http://twilio.com/docs/libraries



@app.route("/", methods=['GET', 'POST'])
def send_sms(name, msg):
    # Find these values at https://twilio.com/user/account
    account_sid = "ACXXXXXXXXXXXXXXXXX"
    auth_token = "YYYYYYYYYYYYYYYYYY"
    client = Client(account_sid, auth_token)



    message = client.api.account.messages.create(to="+12316851234",
                                                 from_="+15555555555",
                                                 body=msg)


if __name__ == "__main__":
    app.run(debug=True)o
