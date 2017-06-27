const PersonRepository = require('../repositories/personRepository');

const personRepo = new PersonRepository();

module.exports = {
  get: function get(req, res) {
    const person = personRepo.new({
      firstName: 'John',
      lastName: 'Smith',
      username: 'user1',
    });
    person.save();

    const result = personRepo.serializer.serialize([person]);

    console.log(JSON.stringify(result, null, '  '));
    res.json(result);
  },

  post: function post(req, res) {
    const params = req.swagger.params;
    const firstName = params.firstName.value;
    const lastName = params.lastName.value;
    const userName = params.username.value;

    const person = personRepo.create({ firstName, lastName, userName });

    res.json(personRepo.serializer.serialize(person));
  },
};
