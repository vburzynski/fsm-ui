const edgeRepo = require('../repositories/edge-repository');
const co = require('bluebird').coroutine;

const { serializer, deserializer } = edgeRepo;

module.exports = {
  getEdges: co(function* get(req, res) {
    const edges = yield edgeRepo.findAll();
    res
      .type('application/vnd.api+json')
      .json(serializer.serialize(edges));
  }),

  getEdge: co(function* get(req, res) {
    const params = req.swagger.params;
    const id = params.id.value;
    const edge = yield edgeRepo.findById(id);

    if (edge) {
      res
        .type('application/vnd.api+json')
        .send(JSON.stringify(serializer.serialize(edge)));
    } else {
      res.status(404).end('Edge does not exist');
    }
  }),

  createEdge: co(function* post(req, res) {
    const params = req.swagger.params;
    const edge = yield deserializer.deserialize(params.edge.value);

    const record = yield edgeRepo.create({
      title: edge.title,
    });

    res
      .status(201)
      .type('application/vnd.api+json')
      .send(JSON.stringify(serializer.serialize(record)));
  }),
};
