const express = require("express");
const app = express();
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MmD83SF21GJzaIyksHCLr9B0Jf5Vuby0aVyfBpS8Y3lZ9sQuokT8eQ3STXQgE5A9ZhRxG7xlELJ2Y1ptbDs4tbe00xzCoDZUt"
);

const uuid = require("uuid").v4;

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.post("/create-payment-intent", async (req, res) => {
  try {
    // console.log(req.body)

    // const { token, Name, amount } = req.body;

    // const paymentIntent = await stripe.paymentIntents.create({
    //   currency: "eur",
    //   amount: 1999,
    //   automatic_payment_methods: { enabled: true },
    // });

    // console.log(paymentIntent.client_secret)

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:4242/success',
      cancel_url: 'http://localhost:4242/cancel',
    });
  
    res.status(200).json(session.url);

  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "failure", error: error });
  }
});

app.listen(port, () => {
  console.log("server is running...");
});
