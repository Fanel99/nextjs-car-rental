// I still  need the data, Right?

exports.up = async function up(sql) {
  await sql`
    CREATE TABLE carsdata (
			user_id integer REFERENCES users (id) ON DELETE CASCADE,
			car_name varchar(500) NOT NULL,
			description varchar(1000) NOT NULL,
			day_price varchar(200) NOT NULL,
			pick_up_adress varchar(500) NOT NULL,
			city varchar(1000) NOT NULL,
			image_url varchar(1000),
			phone varchar(200) NOT NULL
    )
  `;
};

// Delete the  table

exports.down = async function down(sql) {
  await sql`
    DROP TABLE carsdata
  `;
};
