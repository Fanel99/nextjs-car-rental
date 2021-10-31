import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import React from 'react';
import Layout from '../../components/Layout';
import { User } from '../../util/database';

type Props = {
  username: User;
};

const singleUserWrapper = css`
  height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SingleUser = (props: Props) => {
  return (
    <Layout>
      <div css={singleUserWrapper}>
        <h1>Welcome {props.username}!</h1>
        <Link href="/logout">Logout</Link>
      </div>
    </Layout>
  );
};

export default SingleUser;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { getUser, getUserBySessionToken } = await import(
    '../../util/database'
  );

  const sessionToken = context.req.cookies.sessionToken;

  // Authorization: Allow only specific user
  const sessionUser = await getUserBySessionToken(sessionToken);

  if (!sessionUser) {
    return {
      redirect: {
        permanent: false,
        destination: `/login?returnTo=${context.req.url}`,
      },
    };
  }

  if (sessionUser.id !== Number(context.query.userId)) {
    return {
      props: {
        errors: [{ message: 'Not allowed' }],
      },
    };
  }

  const user = await getUser(Number(context.query.userId));

  return {
    props: {
      user: user,
    },
  };
}
