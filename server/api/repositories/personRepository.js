var Repository = require('./repository');
var _ = require('lodash');

class PersonRepository extends Repository {
  constructor() {
    super('Person');
  }
}

module.exports = PersonRepository;
