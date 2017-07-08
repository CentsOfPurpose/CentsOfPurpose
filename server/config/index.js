/**
 * Import a config based on environment
 */
module.exports = (function() {
    console.log(`Loading config ${process.env.NODE_ENV}`);
    switch(process.env.NODE_ENV) {
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