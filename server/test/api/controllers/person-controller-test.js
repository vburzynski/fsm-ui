const request = require('supertest');
const server = require('../../../app');
const expect = require('chai').expect;

describe('people Controller', function () {
  describe('GET /people', function () {
    it('should return a collection of people', function* () {
      const People = this.mongoose.model('people');

      yield People.create({
        username: 'user1',
        firstName: 'John',
        lastName: 'Smith',
      });

      const res = yield request(server)
        .get('/people')
        .set('Accept', 'application/vnd.api+json')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.exist;
      expect(res.body.data).to.exist;

      const data = res.body.data[0];
      expect(data.type).to.equal('people');
      expect(data.id).to.exist;
      expect(data.attributes).to.exist;
      expect(data.attributes.username).to.equal('user1');
      expect(data.attributes.firstName).to.equal('John');
      expect(data.attributes.lastName).to.equal('Smith');
    });
  });

  describe('GET /people/{id}', function () {
    it('should return a single person matching the id given', function* () {
      const People = this.mongoose.model('people');

      const person = yield People.create({
        username: 'user1',
        firstName: 'John',
        lastName: 'Smith',
      });

      const res = yield request(server)
        .get(`/people/${person.id}`)
        .set('Accept', 'application/vnd.api+json')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(res.body).to.exist;
      expect(res.body.data).to.exist;

      const data = res.body.data;
      expect(data.attributes).to.exist;
      expect(data.attributes.username).to.equal('user1');
      expect(data.attributes.firstName).to.equal('John');
      expect(data.attributes.lastName).to.equal('Smith');
    });
    it('should error with 404 if no person exists with the given id', function* () {
      yield request(server)
        .get('/people/doesnotexist')
        .set('Accept', 'application/vnd.api+json')
        .expect(404);
    });
  });

  describe('POST /people', function () {
    it('should create a person in the database', function* () {
      const user = {
        data: {
          type: 'people',
          attributes: {
            username: 'user3',
            firstName: 'first',
            lastName: 'last',
          },
        },
      };

      const res = yield request(server)
        .post('/people')
        .set('Accept', 'application/vnd.api+json')
        .set('Content-Type', 'application/vnd.api+json')
        .send(user)
        .expect(201);

      expect(res.body).to.exist;
      expect(res.body.data).to.exist;

      const data = res.body.data;
      expect(data.type).to.equal('people');
      expect(data.id).to.exist;
      expect(data.attributes).to.exist;
      expect(data.attributes.username).to.equal(user.data.attributes.username);
      expect(data.attributes.firstName).to.equal(user.data.attributes.firstName);
      expect(data.attributes.lastName).to.equal(user.data.attributes.lastName);

      const People = this.mongoose.model('people');
      const people = yield People.find().exec();
      expect(people.length).to.equal(1);
    });
  });
});
