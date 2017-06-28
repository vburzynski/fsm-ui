const should = require('should');
const request = require('supertest');
const server = require('../../../app');

describe('Hello World Controller', function () {
  describe('GET /hello', function () {
    it('should return a default string', function (done) {
      request(server)
        .get('/hello')
        .set('Accept', 'application/vnd.api+json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          should.not.exist(err);

          res.body.message.should.eql('Hello, stranger!');

          done();
        });
    });

    it('should accept a name parameter', function (done) {
      request(server)
        .get('/hello')
        .query({ name: 'Scott' })
        .set('Accept', 'application/vnd.api+json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          should.not.exist(err);

          res.body.message.should.eql('Hello, Scott!');

          done();
        });
    });
  });
});
