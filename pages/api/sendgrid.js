import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log('REQ.BODY', req.body);
    await sendgrid.send({
      to: 'nextjsoldiebutgoodie@gmail.com', // Your email where you'll receive emails
      from: 'nextjsoldiebutgoodie@gmail.com', // your website email address here
      subject: `${req.body.subject}`,
      html: `<div> <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
      </div>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
