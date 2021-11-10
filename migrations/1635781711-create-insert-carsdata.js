const carsdata = [
  {
    car_name: 'Porche 911',
    description:
      'A timeless design, a contemporary interpretation. The unmistakable silhouette of the 911 is characterised by its iconic flyline. It has barely changed since 1963, and has shaped the DNA of all Porsche models. Including, of course, the 911 Cabriolet and Targa models.',
    day_price: '170',
    pick_up_adress: 'Basel Strase 49',
    city: 'Vienna',
    image_url:
      'https://rennlist.com/wp-content/uploads/2018/07/Porsche-911.jpg',
    phone: '06606333225',
    seats: '2',
    fuel: 'Gas',
  },
  {
    car_name: 'Mercedes 300 SL',
    description:
      'The Mercedes-Benz 300SL was the first iteration of the SL-Class grand tourer and fastest production car of its day. Introduced in 1954 as a two-seat coupé with distinctive gull-wing doors, it was later offered as an open roadster.',
    day_price: '170',
    pick_up_adress: 'Maria Strase 49',
    city: 'Vienna',
    image_url:
      'https://imgix.ranker.com/node_img/79/1564666/original/mercedes-benz-300sl-automobile-models-photo-1?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
    phone: '06606333225',
    seats: '4',
    fuel: 'Gas',
  },
  {
    car_name: 'Alfa Romeo Stradale',
    description:
      'The Alfa Romeo 33 Stradale is a mid-engined sports car built by Italian car manufacturer Alfa Romeo. It is one of the world first supercars; it was the fastest commercially available car for the standing kilometer when introduced.',
    day_price: '210',
    pick_up_adress: 'Mautner Strase 49',
    city: 'Vienna',
    image_url:
      'https://www.autozeitung.de/assets/styles/article_image/public/field/image/alfa-romeo-tipo-33-stradale-cc-01.jpg?itok=IIfnrxe0',
    phone: '06606333225',
    seats: '4',
    fuel: 'Gas',
  },
  {
    car_name: 'BMW 35CSI',
    description:
      'If there is one model in the history of BMW M that represents its most significant era, it is the BMW M635CSi. In 1984, the four-seater continued the concept of high-performance 6-cylinder in-line engines that the legendary BMW M1 had established just a few years earlier. ',
    day_price: '210',
    pick_up_adress: 'Simmeringer Strase 49',
    city: 'Vienna',
    image_url:
      'https://images.cdn.circlesix.co/image/1/700/0/uploads/posts/2016/05/2634aa71ba35f75a05f1429324821535.jpg',
    phone: '06606333225',
    seats: '2',
    fuel: 'Gas',
  },
  {
    car_name: 'Lamborghini Miura',
    description:
      'The Lamborghini Miura is a sports car produced by Italian automaker Lamborghini between 1966 and 1973. The car was the first supercar with a rear mid-engined two-seat layout, although the concept was first seen in a production road car with René Bonnets Matra Djet, introduced in 1964.',
    day_price: '220',
    pick_up_adress: 'MarkHof Strase 49',
    city: 'Vienna',
    image_url:
      'https://i0.wp.com/radical-mag.com/wp-content/uploads/2018/12/img_7307_18-e1610792295437.jpg?w=3697',
    phone: '06606333225',
    seats: '2',
    fuel: 'Gas',
  },
  {
    car_name: 'Ferarri 250GT',
    description:
      'Chassis 2917GT was originally finished in Azzuro light blue and displayed at the 1961 Paris Motor Show. The second owner, who for whatever self-torturous reasoning, only drove black cars—so, he had Carrosserie Chapron paint it black.',
    day_price: '300',
    pick_up_adress: 'Ferrari Strase 49',
    city: 'Vienna',
    image_url:
      'https://d39a3h63xew422.cloudfront.net/wp-content/uploads/2016/04/21062722/is-this-250-gt-swb-berlinetta-the-vintage-ferrari-of-your-dreams-1476934448050-2000x1333.jpg',
    phone: '06606333225',
    seats: '2',
    fuel: 'Gas',
  },
];

exports.up = async function up(sql) {
  console.log('Inserting carsdata...');
  // Looping over the array and INSERTing data in tabel
  for (const cars of carsdata) {
    await sql`
      INSERT INTO carsdata
        (car_name, description, day_price, pick_up_adress, city, image_url, phone, seats, fuel)
      VALUES
			(${cars.car_name}, ${cars.description},${cars.day_price}, ${cars.pick_up_adress},${cars.city},${cars.image_url}, ${cars.phone}, ${cars.seats}, ${cars.fuel});
    `;
  }
};

exports.down = async function down(sql) {
  console.log('Deleting carsdatas...');
  for (const cars of carsdata) {
    await sql`
      DELETE FROM
        carsdata
      WHERE
			car_name = ${cars.car_name} AND
		  description = ${cars.description} AND
			day_price = ${cars.day_price} AND
			pick_up_adress = ${cars.pick_up_adress} AND
			image_url = ${cars.image_url} AND
			city = ${cars.city} AND
			phone = ${cars.phone}
    `;
  }
};
