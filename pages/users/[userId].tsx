import { css } from '@emotion/react';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import profilePic from '../../public/pictures/profile.png';

type Props = {
  username: string;
  userId: string;
  email: string;

  // user: {
  //   name: string | null;
  //   id: number;
  //   username: string;
  //   email: string;
  // };
};

const container = css`
  max-width: 1366px;
  margin: 0 auto 100px;
  width: 100%;
  padding: 0 20px;

  .containerItems {
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }
  .profilePic {
    position: relative;
    width: 400px;
    height: 200px;
    @media (max-width: 1024px) {
      width: 270px;
    }
  }

  .buttonsWrapper {
    margin-top: 30px;
    display: flex;
    gap: 30px;
  }
`;

const singleUserWrapper = css`
  height: 70vh;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: baseline;

  @media (max-width: 1024px) {
    align-items: center;
  }

  a {
    border: solid 2px #c59e47;
    font-size: 18px;
    padding: 4px;
    border-radius: 4px;
    &:hover {
      background-color: #c59e47;
      color: #fff;
    }
  }
  button {
    border: solid 2px #c59e47;
    font-size: 18px;
    padding: 4px;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: #c59e47;
      color: #fff;
    }
  }
  p {
    font-size: 18px;
    span {
      font-weight: bold;
      margin-right: 10px;
    }
  }
`;

const SingleUser = (props: Props) => {
  const router = useRouter();

  return (
    <Layout username={props.username}>
      <Navigation userId={props.userId} />
      <div css={container}>
        <div className="containerItems">
          <div css={singleUserWrapper}>
            <h1>Welcome {props.username}!</h1>
            <p>
              <span> Email: {props.email} </span>
            </p>

            {/* DELETE Account */}
            <div className="buttonsWrapper">
              <button
                onClick={async (event) => {
                  event.preventDefault();
                  if (
                    !window.confirm(
                      `Are you sure you want to delete your account?`,
                    )
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

                  await response.json();

                  router.push(`/`);
                }}
              >
                Delete Account
              </button>
              <Link href="/host">
                <a>Get Started</a>
              </Link>
            </div>
          </div>
          <div className="profilePic">
            <Image src={profilePic} />
          </div>
        </div>
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
