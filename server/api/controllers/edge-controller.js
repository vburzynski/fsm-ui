const edgeRepo = require('../repositories/node-repository');
const co = require('bluebird').coroutine;

const { serializer, deserializer } = edgeRepo;

module.exports = {
  index: co(function* get(req, res) {
    const edges = yield edgeRepo.findAll();
    res.json(serializer.serialize(edges));
  }),

  get: co(function* get(req, res) {
    const params = req.swagger.params;
    const id = params.id.value;
    const edge = yield edgeRepo.findById(id);

    if (edge) {
      res.json(serializer.serialize(edge));
    } else {
      res.status(404).end('Edge does not exist');
    }
  }),

  post: co(function* post(req, res) {
    const params = req.swagger.params;
    const edge = yield deserializer.deserialize(params.edge.value);

    const record = yield edgeRepo.create({
      title: edge.title,
    });

    res.status(201).json(serializer.serialize(record));
  }),
};
