import { css } from '@emotion/react';
import { useState } from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

const formStyle = css`
  h2 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 50px;
    margin-top: 90px;
  }
  span {
    color: #c59e47;
  }
`;

const formWraper = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    padding: 15px 55px;
    outline: none;
    border: none;
    border-radius: 30px;
    font-size: 18px;
    border: 1px solid #c59e47;
    color: #fff;
    font-weight: bold;
    margin: 0 auto;
    background-color: #c59e47;
    margin-top: 40px;
    margin-bottom: 50px;

    cursor: pointer;

    &:hover {
      color: #000;
      background-color: transparent;
    }
  }
  .textarea {
    height: 100px;
    padding-top: 10px;
  }
`;

const inputStyle = css`
  border: 0;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 25px;
  padding-left: 25px;
  width: 100%;
  border: 1px solid #bbbbbb;
  outline: none;
  color: #101010;
`;

const formContainer = css`
  max-width: 600px;
  margin: 0 auto;
  padding: 0 15px;
`;
export default function Form(props) {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  //   Form validation state
  const [errors, setErrors] = useState({});

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    const tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors['name'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  //   Handling form submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidForm = handleValidation();
    console.log(isValidForm);

    if (isValidForm) {
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          name: name,
          subject: subject,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        // console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setName('');
      setEmail('');
      setMessage('');
      setSubject('');
    }
    // console.log(name, email, subject, message);
  };
  return (
    <div css={formStyle}>
      <Layout username={props.username} />
      <Navigation />
      <div css={formContainer}>
        <h2>
          Contact <span>US</span>
        </h2>
        <form css={formWraper} onSubmit={handleSubmit}>
          <input
            data-cy="contact-subject"
            css={inputStyle}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Subject"
            name="subject"
            required
          />
          <input
            data-cy="contact-fullname"
            css={inputStyle}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            name="name"
            required
          />
          <input
            data-cy="contact-email"
            css={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            type="email"
            name="email"
            required
          />
          <textarea
            data-cy="contact-textarea"
            className="textarea"
            css={inputStyle}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here"
            name="message"
            required
          />
          <button data-cy="contact-button">Submit</button>
          <div>
            {showSuccessMessage && (
              <p>Thank you! Your Message has been delivered.</p>
            )}
            {showFailureMessage && (
              <p>Oops! Something went wrong, please try again.</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
