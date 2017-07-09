    /**
 * Plaid Controller
 */
const plaidService = require('./plaid.service')
const userService = require('../users/users.service');
const users = {}; //We dont have a db so we will use memory


class plaidController {
    
    constructor() {
    }

    /**
     * Retrieve the user from the database
     * @param {request} req 
     * @param {response} res 
     */
    retrieveUserTransactionsAction(req, res) {
        let username = req.body.username;
        let user = userService.get(username);
        plaidService.retrieveUserTransactions(user, (err, response) => {
            if(err) {
                res.send(err).status(400);
            } else
            if(response) {
                let transactions = response.transactions.map(transaction => {
                    return {
                        name : transaction.name,
                        amount : transaction.amount,
                        roundUp : (Math.ceil(transaction.amount) - transaction.amount).toFixed(2)
                    }
                })

                res.send(transactions);
            } else {
                res.send("results not ready");
            }
        });
    }

    /**
     * Insert the access token into the database with the corresponding user
     * @param {request} req 
     * @param {response} res 
     */
    handleAccessTokenAction(req, res) {
        let username = "user_good"; //TODO: retrieve from cookie
        let token = req.body.token;
        let user = userService.get(username);
        if(user) {
            user.token = token;
            userService.put(user);
        } else {
            user = {
                username,
                token    
            };
            userService.create(user);
        }   

        plaidService.exchangeToken(user, token, (error, user) => {
            if(error) {
                res.send(error).status(400);
                return;
            }
            console.log(user);
            userService.put(user);
            res.send("Success").status(200);
        });
    }

    /**
     * Webhook
     * @param {request} req 
     * @param {response} res 
     */
    eventAction(req, res) {

    }
}

module.exports = new plaidController();