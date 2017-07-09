const stripe = require("stripe")

class stripeController {

    constructor(){this.client = stripe(Config.STRIPE.SECRET_KEY)}
    chargeCreditCardAction(req, res){
        this.client.customers.create({
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