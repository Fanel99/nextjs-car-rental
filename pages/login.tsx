import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useState } from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import { Errors } from '../util/types';
import { LoginResponse } from './api/login';

const formStyles = css`
  h1 {
    text-align: center;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  flex-direction: column;
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
    max-width: 450px;
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
`;

export default function LoginPage(props: {
  refreshUsername: () => void;
  username?: string;
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>([]);
  const router = useRouter();

  return (
    <Layout username={props.username}>
      <Head>
        <title>Login | Oldie but goodie</title>
      </Head>
      <Navigation />
      <form
        css={formStyles}
        onSubmit={async (event) => {
          event.preventDefault();

          // Send the username and password to the API for verification

          const loginResponse = await fetch('/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          });

          const loginJson = (await loginResponse.json()) as LoginResponse;

          if ('errors' in loginJson) {
            setErrors(loginJson.errors);
            return;
          }

          const destination =
            typeof router.query.returnTo === 'string' && router.query.returnTo
              ? router.query.returnTo
              : `/users/${loginJson.user.id}`;

          props.refreshUsername();

          router.push(destination);
        }}
      >
        <div css={formStyless}>
          <div className="container">
            <div className="title">Login</div>
            <div className="input-box">
              <input
                placeholder="Enter your username"
                required
                value={username}
                onChange={(event) => setUsername(event.currentTarget.value)}
              />
              <div className="underline" />
            </div>

            <div className="input-box">
              <input
                type="password"
                placeholder="Enter your Password"
                required
                value={password}
                onChange={(event) => setPassword(event.currentTarget.value)}
              />
              <div className="underline" />
            </div>
            <div className="input-box button">
              <input type="submit" value="Continue" />
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

  // Redirect from HTTP to HTTPS on Heroku
  if (
    context.req.headers.host &&
    context.req.headers['x-forwarded-proto'] &&
    context.req.headers['x-forwarded-proto'] !== 'https'
  ) {
    return {
      redirect: {
        destination: `https://${context.req.headers.host}/login`,
        permanent: true,
      },
    };
  }

  const sessionToken = context.req.cookies.sessionToken;

  const session = await getValidSessionByToken(sessionToken);
  // console.log(session);

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
    props: {},
  };
}
