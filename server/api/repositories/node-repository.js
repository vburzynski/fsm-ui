const Repository = require('./repository');

class NodeRepository extends Repository {
  constructor() {
    super('nodes');
  }
}

module.exports = new NodeRepository();
