const Repository = require('./repository');

class PersonRepository extends Repository {
  constructor() {
    super('Person');
  }
}

module.exports = new PersonRepository();
