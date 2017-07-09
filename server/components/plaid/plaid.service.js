const plaid = require('plaid');

class plaidService {
    constructor() {
        // Initialize client
        this.plaidClient = new plaid.Client(Config.PLAID.CLIENT_ID, Config.PLAID.SECRET, Config.PLAID.PUBLIC_KEY, Config.PLAID.ENV);

    }

    retrieveUserTransactions(req, res) {
        const now = moment();
        const today = now.format('YYYY-MM-DD');
        const thirtyDaysAgo = now.subtract(30, 'days').format('YYYY-MM-DD');

        plaidClient.getTransactions(access_token, thirtyDaysAgo, today, (err, res) => {
            console.log(`You have ${res.transactions.length} transactions from the last thirty days.`);
        });
    }
}

module.exports = plaidController;