import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import { Errors } from '../util/types';
import { RegisterResponse } from './api/register';

const formStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  label {
    display: block;
  }
`;

const errorsStyles = css`
  color: red;
  text-align: center;
`;
const formStyless = css`
  .container {
    background: #fff;
    max-width: 550px;
    width: 100%;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
  }

  .container .title {
    font-size: 30px;
    font-weight: 600;
    margin: 20px 0 10px 0;
    position: relative;
  }

  .container .title:before {
    content: '';
    position: absolute;
    height: 4px;
    width: 33px;
    bottom: 3px;
    left: 0;
    border-radius: 5px;
    background: linear-gradient(to right, #000000 0%, #403d3e 100%);
  }
  .container .titleRegister:before {
    content: '';
    position: absolute;
    height: 4px;
    width: 27px;
    bottom: 3px;
    left: 0;
    border-radius: 5px;
    background: linear-gradient(to right, #000000 0%, #403d3e 100%);
  }

  .container .input-box {
    width: 100%;
    height: 45px;
    margin-top: 25px;
    position: relative;
  }

  .container .input-box input {
    height: 100%;
    width: 100%;
    outline: none;
    font-size: 16px;
    border: none;
  }

  .container .underline:before {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    background: #ccc;
    left: 0;
    bottom: 0;
  }

  .container .underline:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    left: 0;
    bottom: 0;
    background: linear-gradient(to right, #000000 0%, #403d3e 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.3s ease;
  }
  .container .input-box input:focus ~ .underline:after,
  .container .input-box input:valid ~ .underline:after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .container .button {
    margin: 40px 0 20px 0;
  }

  .container .input-box input[type='submit'] {
    font-size: 17px;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    background: linear-gradient(to right, #000000 0%, #403d3e 100%);
    transition: all 0.3s ease;
  }

  .container .input-box input[type='submit']:hover {
    letter-spacing: 1px;
    background: linear-gradient(to left, #000000 0%, #403d3e 100%);
  }

  .container .option {
    font-size: 14px;
    text-align: center;
    margin-bottom: 20px;
  }

  .container .twitter a,
  .container .facebook a {
    display: block;
    width: 100%;
    height: 45px;
    font-size: 17px;
    text-decoration: none;
    padding-left: 20px;
    color: #fff;
    line-height: 45px;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .container .twitter a {
    margin: 20px 0 15px 0;
    background: linear-gradient(to left, #00acee 0%, #1abeff 100%);
  }

  .container .twitter a:hover {
    background: linear-gradient(to right, #00acee 0%, #1abeff 100%);
  }

  .container .facebook a {
    background: linear-gradient(to left, #3b5998 0%, #476bb8 100%);
  }

  .container .facebook a:hover {
    background: linear-gradient(to right, #3b5998 0%, #476bb8 100%);
  }
`;

type Props = {
  refreshUsername: () => void;
  csrfToken: string;
};

export default function RegisterPage(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<Errors>([]);
  const router = useRouter();

  return (
    <Layout>
      <Navigation />
      <Head>
        <title>Registration | Oldie but goodie</title>
      </Head>
      <form
        css={formStyles}
        onSubmit={async (event) => {
          event.preventDefault();

          const registerResponse = await fetch('/api/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password,
              email: email,
              csrfToken: props.csrfToken,
            }),
          });

          const registerJson =
            (await registerResponse.json()) as RegisterResponse;

          if ('errors' in registerJson) {
            setErrors(registerJson.errors);
            return;
          }
          {
            const destination =
              typeof router.query.returnTo === 'string' && router.query.returnTo
                ? router.query.returnTo
                : `/users/${registerJson.user.id}`;

            props.refreshUsername();

            router.push(destination);
          }
        }}
      >
        <div css={formStyless}>
          <div className="container">
            <div className=" title titleRegister">Sign Up</div>
            <div className="input-box">
              <input
                data-cy="signup-email"
                placeholder="E-mail"
                required
                value={email}
                onChange={(event) => setEmail(event.currentTarget.value)}
              />
              <div className="underline" />
            </div>
            <div className="input-box">
              <input
                data-cy="signup-username"
                placeholder="Username"
                required
                value={username}
                onChange={(event) => setUsername(event.currentTarget.value)}
              />
              <div className="underline" />
            </div>
            <div className="input-box">
              <input
                data-cy="signup-password"
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
                type="password"
                placeholder="Enter your Password"
                required
              />
              <div className="underline" />
            </div>

            <div className="input-box button">
              <input
                data-cy="submit-button"
                type="submit"
                value="Create Account"
              />
            </div>
          </div>
        </div>
      </form>
      <div css={errorsStyles}>
        {errors.map((error) => (
          <div key={`error-${error.message}`}>{error.message}</div>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { getValidSessionByToken } = await import('../util/database');
  const { createToken } = await import('../util/csrf');

  // Redirect from HTTP to HTTPS on Heroku
  if (
    context.req.headers.host &&
    context.req.headers['x-forwarded-proto'] &&
    context.req.headers['x-forwarded-proto'] !== 'https'
  ) {
    return {
      redirect: {
        destination: `https://${context.req.headers.host}/register`,
        permanent: true,
      },
    };
  }

  const sessionToken = context.req.cookies.sessionToken;

  const session = await getValidSessionByToken(sessionToken);

  if (session) {
    // Redirect the user when they have a session
    // token by returning an object with the `redirect` prop
    // https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      csrfToken: createToken(),
    },
  };
}
