/**
 * Import a config based on environment
 */
module.exports = (function() {
    const env = process.env.NODE_ENV;
    console.log(`Loading config ${env}`);
    switch(env) {
        case "dev":
            return require('./dev');
        case "qa":
            return require('./qa');
        case "prod":
            return require('./prod');
        default:
            console.log("Warning: Defaulting to dev environment");
            return require('./dev');
    }
})();