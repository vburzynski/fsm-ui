const Repository = require('./repository');

class NodeRepository extends Repository {
  constructor() {
    super('Node');
  }
}

module.exports = new NodeRepository();
