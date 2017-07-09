module.exports = {
    PORT: 3000,
    STRIPE: {
        PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
        SECRET_KEY: process.env.STRIPE_SECRET_KEY
    },
    PLAID: {
        CLIENT_ID: process.env.PLAID_CLIENT_ID,
        PUBLIC_KEY: process.env.PLAID_PUBLIC_KEY,
        SECRET: process.env.PLAID_SECRET,
        ENV: "sandbox"
    }
}