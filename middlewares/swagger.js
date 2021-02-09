const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Skyler API",
      version: "0.1.0",
      description:
        "Skyler api documentation",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Dong Huu Hieu",
        url: "https://donghuuhieu.xyz",
        email: "donghuuhieu1520@gmail.com",
      },
    },
  },
  apis: ["./routes/apis/v1/*.js", './routes/upload/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = (app, path) => {
	app.use(path, swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
};
