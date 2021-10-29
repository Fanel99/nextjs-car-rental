exports.up = async function up(sql) {
  console.log('Creating sessions table...');
  await sql`
    CREATE TABLE sessions (
			id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
      token varchar(90) UNIQUE NOT NULL,
      expiry_timestamp timestamp NOT NULL DEFAULT NOW() + INTERVAL '24 hours',
			user_id integer REFERENCES users (id) ON DELETE CASCADE
    )
  `;
};

exports.down = async function down(sql) {
  console.log('Deleting sessions table...');
  await sql`DROP TABLE sessions;`;
};
