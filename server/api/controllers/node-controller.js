const nodeRepo = require('../repositories/node-repository');
const co = require('bluebird').coroutine;
const _ = require('lodash');

const { serializer, deserializer } = nodeRepo;

module.exports = {
  getNodes: co(function* getNodes(req, res) {
    const people = yield nodeRepo.findAll();
    res
      .type('application/vnd.api+json').json(serializer.serialize(people));
  }),

  getNode: co(function* getNode(req, res) {
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

  createNode: co(function* createNode(req, res) {
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

  updateNode: co(function* updateNode(req, res) {
    const params = req.swagger.params;
    const id = params.id.value;

    const update = yield deserializer.deserialize(params.node.value);
    const node = yield nodeRepo.findByIdAndUpdate(id, { $set: update }, { new: true });

    if (node) {
      res
        .type('application/vnd.api+json')
        .send(JSON.stringify(serializer.serialize(node)));
    } else {
      res.status(404).end('node does not exist');
    }
  }),

  deleteNode: co(function* deleteNode(req, res) {
    const params = req.swagger.params;
    const id = params.id.value;

    const node = yield nodeRepo.findByIdAndRemove(id);

    if (node) {
      res.status(200).end('node removed');
    } else {
      res.status(404).end('node does not exist');
    }
  }),
};
