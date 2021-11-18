const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.url = url;
    this.fromEmail = 'nextjsoldiebutgoodie@gmail.com';
    this.fromName = 'fanel@gmail.com';
  }

  async sendMagicLink() {
    const mailOptions = {
      to: this.to,
      from: {
        email: this.fromEmail,
        name: this.fromName,
      },
      templateId: 'YOUR-SENDGRID-DYNAMIC-TEMPLATE-ID',
      dynamic_template_data: {
        url: this.url,
      },
    };

    await sgMail.send(mailOptions).then(() => {}, console.error);
  }
};
