const SwaggerExpress = require('swagger-express-mw');
const app = require('express')();
const bodyParser = require('body-parser');

module.exports = app; // for testing
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

const config = {
  appRoot: __dirname, // required config
};

SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log(`try this:\ncurl http://127.0.0.1:${port}/hello?name=Scott`);
  }
});
