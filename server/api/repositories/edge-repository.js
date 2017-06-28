const Repository = require('./repository');

class EdgeRepository extends Repository {
  constructor() {
    super('edges');
  }
}

module.exports = new EdgeRepository();
