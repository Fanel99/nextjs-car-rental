import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';

type Props = {
  username: string;
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
  const [userList, setUserList] = useState(props.username);
  console.log('from state', userList);

  // async function deleteUsername(id) {
  //   const usersResponse = await fetch(`${props.baseUrl}/api/users/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   const deletedUsername = await usersResponse.json();

  //   const newState = userList.filter((user) => user.id !== deletedUsername.id);
  //   setUserList(newState);
  // }

  return (
    <Layout username={props.username}>
      <Navigation />
      <div css={singleUserWrapper}>
        <h1>Welcome {props.username}!</h1>
        <Link href="/logout">Logout</Link>

        {/* DELETE Account */}
        <button
          // onClick={() => deleteUsername()}
          onClick={async (event) => {
            event.preventDefault();

            const response = await fetch(
              `http://localhost:3000/api/users/${13}`,
              {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  username: props.username,
                }),
              },
            );

            const deletedUsername = await response.json();

            // const newState = userList.filter(
            //   (user) => user.id !== deletedUser.id,
            // );
            // setUserList(newState);

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
  // console.log('from gSSP', user);

  return {
    props: {
      user: user,
    },
  };
}
