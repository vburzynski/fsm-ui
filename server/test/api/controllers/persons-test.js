const request = require('supertest');
const server = require('../../../app');
const expect = require('chai').expect;

describe('Persons Controller', function () {
  describe('GET /persons', function () {
    it('should return a collection of persons', function* () {
      const Person = this.mongoose.model('Person');

      yield Person.create({
        username: 'user1',
        firstName: 'John',
        lastName: 'Smith',
      });

      const res = yield request(server)
        .get('/persons')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.exist;
      expect(res.body.data).to.exist;

      const data = res.body.data[0];
      expect(data.type).to.equal('Person');
      expect(data.id).to.exist;
      expect(data.attributes).to.exist;
      expect(data.attributes.username).to.equal('user1');
      expect(data.attributes.firstName).to.equal('John');
      expect(data.attributes.lastName).to.equal('Smith');
    });
  });

  describe('POST /persons', function () {
    it('should create a person in the database', function* () {
      const user = {
        data: {
          type: 'Person',
          attributes: {
            username: 'user3',
            firstName: 'first',
            lastName: 'last',
          },
        },
      };

      const res = yield request(server)
        .post('/persons')
        .send(user)
        .expect(201);

      expect(res.body).to.exist;
      expect(res.body.data).to.exist;

      const data = res.body.data;
      expect(data.type).to.equal('Person');
      expect(data.id).to.exist;
      expect(data.attributes).to.exist;
      expect(data.attributes.username).to.equal(user.data.attributes.username);
      expect(data.attributes.firstName).to.equal(user.data.attributes.firstName);
      expect(data.attributes.lastName).to.equal(user.data.attributes.lastName);

      const Person = this.mongoose.model('Person');
      const persons = yield Person.find().exec();
      expect(persons.length).to.equal(1);
    });
  });
});
