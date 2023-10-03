
const functions = require("firebase-functions");

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")("sk_test_51NuebUSJl8m1WzggVC9AOitivN6h7iarI9alg3GDbWKgnbCV2vqsW6NHy7XsIZSIwwQu5TVZmD7yJThOdYQbvHDS00aGq0oouN");

// Api

// App config
const app = express();

// Middlewares
app.use(cors({origin: true})); // Allow cross domain requests (CORS)
app.use(express.json());

// Api routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunit of currency
    currency: "INR",
  });

  //   ok - created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-961b0/us-central1/api
