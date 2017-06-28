const nodeRepo = require('../repositories/node-repository');
const co = require('bluebird').coroutine;

const { serializer, deserializer } = nodeRepo;

module.exports = {
  getNodes: co(function* get(req, res) {
    const people = yield nodeRepo.findAll();
    res
      .type('application/vnd.api+json').json(serializer.serialize(people));
  }),

  getNode: co(function* get(req, res) {
    const params = req.swagger.params;
    const id = params.id.value;

    const node = yield nodeRepo.findById(id);

    if (node) {
      res
        .type('application/vnd.api+json')
        .send(JSON.stringify(serializer.serialize(node)));
    } else {
      res.status(404).end('node does not exist');
    }
  }),

  createNode: co(function* post(req, res) {
    const params = req.swagger.params;
    const node = yield deserializer.deserialize(params.node.value);

    const record = yield nodeRepo.create({
      title: node.title,
    });

    res
      .status(201)
      .type('application/vnd.api+json')
      .send(JSON.stringify(serializer.serialize(record)));
  }),
};
