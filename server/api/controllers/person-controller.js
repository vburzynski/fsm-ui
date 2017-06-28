const PersonRepository = require('../repositories/person-repository');
const bluebird = require('bluebird');

const personRepo = new PersonRepository();
const co = bluebird.coroutine;

module.exports = {
  index: co(function* get(req, res) {
    const people = yield personRepo.findAll();
    res.json(personRepo.serializer.serialize(people));
  }),

  get: co(function* get(req, res) {
    const params = req.swagger.params;
    const id = params.id.value;

    const person = yield personRepo.findById(id);

    if (person) {
      res.json(personRepo.serializer.serialize(person));
    } else {
      res.status(404).end("Person does not exist");
    }
  }),

  post: co(function* post(req, res) {
    const params = req.swagger.params;
    const person = yield personRepo.deserializer.deserialize(params.person.value);

    const record = yield personRepo.create({
      username: person.username,
      firstName: person.firstName,
      lastName: person.lastName,
    });

    res.status(201).json(personRepo.serializer.serialize(record));
  }),
};
