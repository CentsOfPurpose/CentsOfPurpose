const plaid = require('plaid');
const moment = require('moment');

class plaidService {
    constructor() {
        // Initialize client
        this.client = new plaid.Client(
            Config.PLAID.CLIENT_ID,
            Config.PLAID.SECRET,
            Config.PLAID.PUBLIC_KEY,
            plaid.environments[Config.PLAID.ENV]
        );

    }

    retrieveUserTransactions(user, callback) {
        const now = moment();
        const today = now.format('YYYY-MM-DD');
        const thirtyDaysAgo = now.subtract(30, 'days').format('YYYY-MM-DD');

        console.log("user", user);
        this.client.getTransactions(user.access_token, thirtyDaysAgo, today, (err, res) => {
            if (err) {
                return err;
            }
            callback(null, res.transactions);
        });
    }

    /**
     * Exchange token 
     * @param {User} user 
     * @param {string} token 
     * @param {function} callback 
     */
    exchangeToken(user, token, callback) {
        console.log("Config.PLAID", Config.PLAID);
        console.log("token", token);
        this.client.exchangePublicToken(token, function (error, tokenResponse) {
            if (error) {
                callback(error);
            }
            let access_token = tokenResponse.access_token;
            let item_id = tokenResponse.item_id;
            user.access_token = access_token;
            user.item_id = item_id;
            callback(null, user);
        });
    }
}

module.exports = new plaidService();