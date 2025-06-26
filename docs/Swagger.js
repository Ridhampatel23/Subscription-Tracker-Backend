const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Subscription Tracker",
            version: "1.0",
        },
    },
    apis: ["./routes/**/*.js"],
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;