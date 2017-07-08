const keyPublishable = process.env.pk_test_9lljIg1Rl0nShh2dcly87dp8;
const keySecret = process.env.sk_test_FmhL1y6U0mumewpJe1I4cFLy;

const app = require("express")();
const stripe = require("stripe")(keySecret);