'use strict';

const SwaggerExpress = require('swagger-express-mw');
let app = require('express')();

module.exports = app; // for testing


let config = {
  appRoot: __dirname, // required config,  
  swaggerFile: 'api/swagger/swagger.yaml', // which swagger file  
};

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) { throw err; }
  // install middleware
  swaggerExpress.register(app);

  const port = process.env.PORT || 3010;
  app.listen(port);

  console.log(`### service started in port: ${port}`)

});