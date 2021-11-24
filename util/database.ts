import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';
import setPostgresDefaultsOnHeroku from './node-heroku-postgres-env-vars';

setPostgresDefaultsOnHeroku();

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
      username,
      email
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
      username,
      email
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

export async function createUser({
  username,
  email,
}: {
  username: string;
  email: string;
}) {
  const users = await sql`
    INSERT INTO users
      (username,  email)
    VALUES
      (${username}, ${email})
    RETURNING
      id,
      username,
      email
  `;
  return camelcaseKeys(users[0]);
}

export async function insertUser({
  username,
  passwordHash,
  email,
}: {
  username: string;
  passwordHash: string;
  email: string;
}) {
  const [user] = await sql<[User]>`
    INSERT INTO users
      (username, password_hash, email)
    VALUES
      (${username}, ${passwordHash}, ${email})
    RETURNING
      id,
      username,
      email;

  `;
  return camelcaseKeys(user);
}

export async function updateUserById(
  id: number,
  {
    username,
    email,
  }: {
    username: string;
    email: string;
  },
) {
  const users = await sql`
    UPDATE
      users
    SET
      username = ${username},
      email = ${email}
    WHERE
      id = ${id}
    RETURNING
      id,
      username,
      email
  `;
  return camelcaseKeys(users[0]);
}

export async function deleteUserById(id: number) {
  const [user] = await sql<[User | undefined]>`
    DELETE FROM
      users
    WHERE
      id = ${id}
    RETURNING
      id
  `;
  return user && camelcaseKeys(user);
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

// API ROUTES FUNCTIONS FOR CRUD

export async function getCarsData() {
  const cardatas = await sql`
    SELECT * FROM  carsdata;
  `;
  return cardatas.map((cardata) => {
    return camelcaseKeys(cardata);
  });
}

export async function getCarData(id: number) {
  const [cardatas] = await sql`

    SELECT
     *
    FROM
      carsdata
    WHERE
      id = ${id}

  `;

  // console.log('from DB', cardatas);
  return camelcaseKeys(cardatas);
}

export async function createAds({
  carName,
  userid,
  description,
  dayPrice,
  pickUpAdress,
  city,
  imageUrl,
  phone,
  seats,
  fuel,
}: {
  carName: string;
  userid: number;
  description: string;
  dayPrice: number;
  pickUpAdress: string;
  city: string;
  imageUrl: string;
  phone: number;
  seats: number;
  fuel: string;
}) {
  const [cardata] = await sql`
    INSERT INTO carsdata
      ( car_name, user_id, description, day_price, pick_up_adress,city, image_url,phone, seats, fuel)
    VALUES
      (${carName}, ${userid}, ${description}, ${dayPrice}, ${pickUpAdress},${city}, ${imageUrl}, ${phone}, ${seats}, ${fuel})
    RETURNING
      car_name,
      user_id
      description,
      day_price,
      pick_up_adress,
      city,
      image_url,
      phone,
      seats,
      fuel
  `;
  return camelcaseKeys(cardata);
}

export async function deleteUserByUsername(id: number) {
  const users = await sql`
    DELETE FROM
      users
    WHERE
      id = ${id}
    RETURNING
      id
  `;
  // console.log('from DB', users);
  // return user && camelcaseKeys(user);
  return users.map((user) => camelcaseKeys(user))[0];
}

export async function updateAddById(
  id: number,
  {
    carName,
    description,
    dayPrice,
    pickUpAdress,
    city,
    imageUrl,
    phone,
    seats,
    fuell,
  }: {
    carName: string;
    description: string;
    dayPrice: number;
    pickUpAdress: string;
    city: string;
    imageUrl: string;
    phone: number;
    seats: number;
    fuell: string;
  },
) {
  const cardata = await sql`
    UPDATE
      carsdata

    SET
    car_name = ${carName},
    description = ${description},
    day_price = ${dayPrice},
    pick_up_adress = ${pickUpAdress},
    city = ${city},
    image_url = ${imageUrl},
    phone = ${phone},
    seats = ${seats},
    fuel = ${fuell}

    WHERE
      id = ${id}

    RETURNING
      id,
      car_name,
      description,
      day_price,
      pick_up_adress,
      city,
      image_url,
      phone,
      seats,
      fuel
  `;
  return camelcaseKeys(cardata[0]);
}
