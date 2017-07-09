/**
 * Plaid Controller
 */
const userService = require('../users/users.service');
const users = {}; //We dont have a db so we will use memory

class plaidController {
    constructor() {
    }

    /**
     * Retrieve the user from the database
     * @param {*} req 
     * @param {*} res 
     */
    retrieveUserTransactionsAction(req, res) {
        
    }

    /**
     * Insert the access token into the database with the corresponding user
     * @param {*} req 
     * @param {*} res 
     */
    handleAccessTokenAction(req, res) {
        let username = "user_good"; //TODO: retrieve from cookie
        let token = req.body.public_token;
        let user = userService.get(username);
        if(user) {
            user.token = token;
            userService.put(user);
        } else {
            userService.create({
                username,
                token    
            });
        }   

        console.log("token", token);
        res.send("Success").status(200);
    }

    /**
     * Webhook
     * @param {*} req 
     * @param {*} res 
     */
    eventAction(req, res) {

    }
}

module.exports = new plaidController();