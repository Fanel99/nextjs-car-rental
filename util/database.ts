import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

export type User = {
  id: number;
  username: string;
  name: string | null;
};
export type Session = {
  id: number;
  token: string;
  userId: number;
  expiryTimestamp: Date;
};

export type UserWithPasswordHash = User & {
  passwordHash: string;
};
export type CarsData = {
  id: number;
  car_name: string;
  description: string;
  day_price: string;
  pick_up_adress: string;
  image_url: string;
  city: string;
  phone: string;
};
export type CarData = {
  id: number;
  car_name: string;
  description: string;
  day_price: string;
  pick_up_adress: string;
  image_url: string;
  city: string;
  phone: string;
};

// Read in the environment variables
// in the .env file, making it possible
// to connect to PostgreSQL
dotenvSafe.config();

declare module globalThis {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  let __postgresSqlClient: ReturnType<typeof postgres> | undefined;
}

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    // When we're in development, make sure that we connect only
    // once to the database
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

export async function getUsers() {
  const users = await sql<User[]>`
    SELECT
      id,
      username
    FROM
      users;
  `;
  return users.map((user) => {
    return camelcaseKeys(user);
  });
}

export async function getUser(id: number) {
  const [user] = await sql<[User]>`
    SELECT
      id,
      username
    FROM
      users
    WHERE
      id = ${id};
  `;
  return camelcaseKeys(user);
}

export async function getUserWithPasswordHashByUsername(username: string) {
  const [user] = await sql<[UserWithPasswordHash | undefined]>`
    SELECT
      id,
      username,
      password_hash
    FROM
      users
    WHERE
      username = ${username};
  `;
  return user && camelcaseKeys(user);
}

export async function getUserBySessionToken(sessionToken: string | undefined) {
  if (!sessionToken) return undefined;

  const [user] = await sql<[User | undefined]>`
    SELECT
      users.id,
      users.username
    FROM
      sessions,
      users
    WHERE
      sessions.token = ${sessionToken} AND
      sessions.user_id = users.id
  `;
  return user && camelcaseKeys(user);
}

export async function createUser({ username }: { username: string }) {
  const users = await sql`
    INSERT INTO users
      (username)
    VALUES
      (${username})
    RETURNING
      id,
      username
  `;
  return camelcaseKeys(users[0]);
}

export async function insertUser({
  username,
  passwordHash,
}: {
  username: string;
  passwordHash: string;
}) {
  const [user] = await sql<[User]>`
    INSERT INTO users
      (username, password_hash)
    VALUES
      (${username}, ${passwordHash})
    RETURNING
      id,
      username;
  `;
  return camelcaseKeys(user);
}

export async function updateUserById(
  id: number,
  {
    username,
  }: {
    username: string;
  },
) {
  const users = await sql`
    UPDATE
      users
    SET
      username = ${username}
    WHERE
      id = ${id}
    RETURNING
      id,
      username

  `;
  return camelcaseKeys(users[0]);
}

export async function deleteUserById(id: number) {
  const users = await sql`
    DELETE FROM
      users
    WHERE
      id = ${id}
    RETURNING
      id,
      username
  `;
  return camelcaseKeys(users[0]);
}

export async function createSession(token: string, userId: number) {
  const [session] = await sql<[Session]>`
  INSERT INTO sessions
    (token, user_id)
  VALUES
  (${token}, ${userId})
  RETURNING
  *
`;
  return camelcaseKeys(session);
}

export async function deleteExpiredSession() {
  const sessions = await sql<Session[]>`
  DELETE FROM
  sessions
  WHERE expiry_timestamp < NOW()
  RETURNING *
  `;
  return sessions.map((session) => camelcaseKeys(session))[0];
}

export async function deleteSessionByToken(token: string) {
  const sessions = await sql<Session[]>`
    DELETE FROM
      sessions
    WHERE
      token = ${token}
    RETURNING *
  `;
  return sessions.map((session) => camelcaseKeys(session))[0];
}

export async function getValidSessionByToken(token: string) {
  if (!token) return undefined;

  const [session] = await sql<[Session | undefined]>`
    SELECT
    *
    FROM
    sessions
    WHERE
    token = ${token} and
    expiry_timestamp > NOW()
  `;
  return session && camelcaseKeys(session);
}

export async function deleteExpiredSessions() {
  const sessions = await sql<Session[]>`
    DELETE FROM
      sessions
    WHERE
      expiry_timestamp < NOW()
    RETURNING *
  `;

  return sessions.map((session) => camelcaseKeys(session));
}

// API ROUTES FUNCTIONS FOR CRUD

export async function getCarsData() {
  const cardatas = await sql<CarsData[]>`
    SELECT * FROM  carsdata;
  `;
  return cardatas.map((cardata) => {
    return camelcaseKeys(cardata);
  });
}

export async function getCarData(id: number) {
  console.log(id);
  const cardatas = await sql<CarData[]>`

    SELECT
      *
    FROM
      carsdata
    WHERE
      id = ${id};
  `;

  return cardatas.map((cardata) => camelcaseKeys(cardata))[0];
}
