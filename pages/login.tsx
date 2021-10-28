import { css } from '@emotion/react';
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
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
`;

const h1 = css`
  text-align: center;
  margin-top: 100px;
`;

export default function LoginPage(props: { refreshUsername: () => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>([]);
  const router = useRouter();

  return (
    <Layout>
      <Header />
      <h1 css={h1}>Login</h1>

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
              : `/`;

          // props.refreshUsername();

          router.push(destination);
        }}
      >
        <label>
          Username
          <input
            value={username}
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </label>

        <button>Login</button>
        <ul> {`Hello, ${props.refreshUsername}`} </ul>
      </form>

      <div css={errorsStyles}>
        {errors.map((error) => (
          <div key={`error-${error.message}`}>{error.message}</div>
        ))}
      </div>
    </Layout>
  );
}
