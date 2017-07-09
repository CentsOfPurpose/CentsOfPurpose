const stripe = require("stripe");
const client = stripe(Config.STRIPE.SECRET_KEY);

class stripeController {

  chargeCreditCardAction(req, res) {
    console.log("Charging creditcard");
    client.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
      })
      .then(customer =>
        this.client.charges.create({
          amount,
          description: "Sample Charge",
          currency: "usd",
          customer: customer.id
        }))
      .then(charge => res.redirect("/"));
  }
}

module.exports = new stripeController()