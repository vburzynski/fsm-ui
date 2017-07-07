const edgeRepo = require('../repositories/edge-repository');
const co = require('bluebird').coroutine;

const { serializer, deserializer } = edgeRepo;

module.exports = {
  getEdges: co(function* get(req, res) {
    const edges = yield edgeRepo.findAll();

    console.log('edges:', JSON.stringify(serializer.serialize(edges), null, '  '));
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

    console.log('creating edge:', JSON.stringify(edge, null, '  '));
    const record = yield edgeRepo.create(edge);
    console.log('new edge:', JSON.stringify(edge, null, '  '));
    res
      .status(201)
      .type('application/vnd.api+json')
      .send(JSON.stringify(serializer.serialize(record)));
  }),

  updateEdge: co(function* updateEdge(req, res) {
    const params = req.swagger.params;
    const id = params.id.value;

    const update = yield deserializer.deserialize(params.edge.value);
    const edge = yield edgeRepo.findByIdAndUpdate(id, { $set: update }, { new: true });

    if (edge) {
      res
        .type('application/vnd.api+json')
        .json(serializer.serialize(edge));
    } else {
      res.status(404).end('edge does not exist');
    }
  }),

  deleteEdge: co(function* deleteEdge(req, res) {
    const params = req.swagger.params;
    const id = params.id.value;
    const edge = yield edgeRepo.findByIdAndRemove(id);

    if (edge) {
      res.status(200).end('edge removed');
    } else {
      res.status(404).end('edge does not exist');
    }
  }),
};
