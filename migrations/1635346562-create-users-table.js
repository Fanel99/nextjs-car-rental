// Create  Tabel with ley up

exports.up = async function up(sql) {
  await sql`
    CREATE TABLE users (
      id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
			username varchar(40) UNIQUE NOT NULL,
			password_hash varchar(100) NOT NULL,
      email varchar(100) NOT NULL
    )
  `;
};

// Drop table with ley down

exports.down = async function down(sql) {
  await sql`
    DROP TABLE users
  `;
};
