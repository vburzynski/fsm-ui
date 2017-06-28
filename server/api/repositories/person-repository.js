const Repository = require('./repository');

class PersonRepository extends Repository {
  constructor() {
    super('people');
  }
}

module.exports = new PersonRepository();
