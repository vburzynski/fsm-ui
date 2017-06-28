const Repository = require('./repository');

class EdgeRepository extends Repository {
  constructor() {
    super('Edge');
  }
}

module.exports = new EdgeRepository();
