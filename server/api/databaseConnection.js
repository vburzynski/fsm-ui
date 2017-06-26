const fs = require('fs');
const YAML = require('yamljs');
const mongoose = require('mongoose');
const swaggerMongoose = require('swagger-mongoose');

// var Person = compiled.models.Person;
// var person = new Person({
//   firstName: 'John',
//   lastName: 'Smith',
//   username: 'user1'
// });
// person.save();

module.exports = {
  isConnected: false,
  connection: null,
  models: {},
  schemas: {},

  connect: function connect() {
    if (this.isConnected && this.connection) {
      return this.connection;
    }

    // TODO: Move this to a environment/config file
    mongoose.connect('mongodb://localhost/fsm_ui');

    this.connection = mongoose.connection;
    this.connection.on('error', console.error.bind(console, 'connection error:'));

    // TODO: Move yaml path to config file
    const yaml = fs.readFileSync('./api/swagger/swagger.yaml', 'utf8');
    const spec = YAML.parse(yaml);
    // TODO: Modify swaggerMongoose to support JSON API
    const compiled = swaggerMongoose.compile(spec);

    this.models = compiled.models;
    this.schemas = compiled.schemas;
    this.isConnected = true;

    return this.connection;
  },
};
