var _ = require('lodash');
var databaseConnection = require('../databaseConnection');
var JSONAPISerializer = require('jsonapi-serializer');
var { Serializer, Deserializer } = JSONAPISerializer;

class Repository {
  constructor(type) {
    this.connection = databaseConnection.connect();
    this.model      = databaseConnection.models[type];
    this.schema     = databaseConnection.schemas[type];

    var attributes = _
      .chain(this.schema)
      .get('paths')
      .keys()
      .pull('__v', '_id')
      .value();

    this.serialize = new Serializer(type, {
      id: '_id',
      attributes: attributes,
      keyForAttribute: 'camelCase'
    }).serialize;

    var data = [{ username: 'a', _id: 1, firstName: 'a', lastName: 'b' }];

    console.log(JSON.stringify(new Serializer(type, {
      id: '_id',
      attributes: attributes,
      keyForAttribute: 'camelCase'
    }).serialize(data), null, '  '));
    console.log('wtf');
    console.log(this.serialize(data))
  }
  new(json) {
    return new this.model(json);
  }
  create() {
    return this.model.create.apply(this.model, arguments);
  }
  save(record) {
    record.save();
  }
  delete(record) {
    record.remove();
  }
  findAll() {
    this.model.find();
  }
  findById(id) {
    this.model.findById(id);
  }
  drop() {
    this.model.collection.remove();
  }
  insertMany(records) {
    this.model.insertMany(records);
  }
}

module.exports = Repository;
