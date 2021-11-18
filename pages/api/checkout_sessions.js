const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price: 'price_1Jve4mIHfsqDJpNU3lUNdMUN',
            quantity: 3,
          },
        ],
        payment_method_types: ['card', 'sofort'],
        mode: 'payment',
        success_url: `${req.headers.origin}/succes`,
        cancel_url: `${req.headers.origin}/cars`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
