var fs = require('fs');
var YAML = require('yamljs');
var mongoose = require('mongoose');
var swaggerMongoose = require('swagger-mongoose');

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
  connect: function() {
    if (this.isConnected && this.connection) {
      return this.connection;
    }

    mongoose.connect('mongodb://localhost/fsm_ui');
    this.connection = mongoose.connection;
    this.connection.on('error', console.error.bind(console, 'connection error:'));
    this.connection.once('open', function() {
      console.log('connected');
    });

    var yaml = fs.readFileSync('./api/swagger/swagger.yaml', 'utf8');
    var spec = YAML.parse(yaml);
    var compiled = swaggerMongoose.compile(spec);

    this.models = compiled.models;
    this.schemas= compiled.schemas;
    this.isConnected = true;
  },
  models: {},
  schemas: {}
}
