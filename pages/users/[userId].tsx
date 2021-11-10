import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';

type Props = {
  user: {
    name: string | null;
    id: number;
    username: string;
  };
};

const singleUserWrapper = css`
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const SingleUser = (props: Props) => {
  const router = useRouter();
  const [user, setUser] = useState(props.user);
  // console.log('from state', user);

  return (
    <Layout username={props.user.username}>
      <Navigation />
      <div css={singleUserWrapper}>
        <h1>Welcome {props.user.username}!</h1>
        <Link href="/logout">Logout</Link>

        {/* DELETE Account */}
        <button
          onClick={async (event) => {
            event.preventDefault();
            if (
              !window.confirm(`Are you sure you want to delete your account?`)
            ) {
              return;
            }

            const response = await fetch(
              `http://localhost:3000/api/users/${props.user.id}`,
              {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
              },
            );

            const user = await response.json();

            router.push(`/`);
          }}
        >
          Delete Account
        </button>
      </div>
    </Layout>
  );
};

export default SingleUser;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { getUser, getUserBySessionToken } = await import(
    '../../util/database'
  );

  // console.log('from gSSP', context.query.userId);
  const sessionToken = context.req.cookies.sessionToken;
  // console.log('from sessionToken', sessionToken);

  // Authorization: Allow only specific user
  const sessionUser = await getUserBySessionToken(sessionToken);

  console.log('from sessionToken', sessionUser);

  if (!sessionUser) {
    return {
      redirect: {
        permanent: false,
        destination: `/login?returnTo=${context.req.url}`,
      },
    };
  }

  console.log(
    'from true or false',
    sessionUser.id !== Number(context.query.userId),
  );

  if (sessionUser.id !== Number(context.query.userId)) {
    return {
      props: {
        errors: [{ message: 'Not allowed' }],
      },
    };
  }

  const user = await getUser(Number(context.query.userId));
  // console.log('from gSSP', user);

  return {
    props: {
      user: user,
    },
  };
}
