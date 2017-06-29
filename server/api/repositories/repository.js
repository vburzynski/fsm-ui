const _ = require('lodash');
const databaseConnection = require('../databaseConnection');
const JSONAPISerializer = require('jsonapi-serializer');

const { Serializer, Deserializer } = JSONAPISerializer;

class Repository {
  constructor(type) {
    this.connection = databaseConnection.connect();
    this.Model = databaseConnection.models[type];
    this.schema = databaseConnection.schemas[type];

    // TODO: Move to helper _filterMongooseAttributes() ?
    const attributes = _
      .chain(this.schema)
      .get('paths')
      .keys()
      .pull('__v', '_id')
      .value();

    this.serializer = new Serializer(type, {
      id: '_id',
      attributes,
      keyForAttribute: 'camelCase',
      pluralizeType: true,
    });

    // TODO: configure this
    this.deserializer = new Deserializer({
      keyForAttribute: 'camelCase',
    });

    const data = [{ username: 'a', _id: 1, firstName: 'a', lastName: 'b' }];

    console.log(JSON.stringify(this.serializer.serialize(data)));
  }

  new(json) {
    return new this.Model(json);
  }

  create(...args) {
    return this.Model.create(...args);
  }

  findAll() {
    return this.Model.find();
  }

  findById(id) {
    return this.Model.findById(id);
  }

  findOneAndUpdate(...args) {
    return this.Model.findOneAndUpdate(...args);
  }

  findByIdAndUpdate(...args) {
    return this.Model.findByIdAndUpdate(...args);
  }

  findByIdAndRemove(...args) {
    return this.Model.findByIdAndRemove(...args);
  }

  drop() {
    return this.Model.collection.remove();
  }

  insertMany(records) {
    return this.Model.insertMany(records);
  }
}

module.exports = Repository;
