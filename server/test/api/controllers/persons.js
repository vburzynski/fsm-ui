const request = require('supertest');
const server = require('../../../app');
const expect = require('chai').expect;

describe('controllers', function () {
  describe('chai', function () {
    describe('GET /persons', function () {
      it.only('should return a default person', function (done) {
        request(server)
          .get('/persons')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function (err, res) {
            expect(err).to.not.exist;

            expect(res.body).to.exist;
            expect(res.body.data).to.exist;

            const data = res.body.data[0];

            expect(data.type).to.equal('Person');
            expect(data.id).to.exist;
            expect(data.attributes).to.exist;
            expect(data.attributes.username).to.equal('user1');
            expect(data.attributes.firstName).to.equal('John');
            expect(data.attributes.lastName).to.equal('Smith');

            done();
          });
      });
    });
  });
});
