const nodeRepo = require('../repositories/node-repository');
const co = require('bluebird').coroutine;

const { serializer, deserializer } = nodeRepo;

module.exports = {
  getNodes: co(function* get(req, res) {
    const people = yield nodeRepo.findAll();
    res.json(serializer.serialize(people));
  }),

  get: co(function* get(req, res) {
    const params = req.swagger.params;
    const id = params.id.value;

    const node = yield nodeRepo.findById(id);

    if (node) {
      res.json(serializer.serialize(node));
    } else {
      res.status(404).end('node does not exist');
    }
  }),

  post: co(function* post(req, res) {
    const params = req.swagger.params;
    const node = yield deserializer.deserialize(params.node.value);

    const record = yield nodeRepo.create({
      title: node.title,
    });

    res.status(201).json(serializer.serialize(record));
  }),
};
