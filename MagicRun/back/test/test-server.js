var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();

chai.use(chaiHttp);

describe('Battles', function () {
    it('should list ALL blobs on /blobs GET', function(done) {
        chai.request('127.0.0.1:8000')
            .get('/battle/mock')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });

    it('should have the number 2 in the body', function(done) {
        chai.request('127.0.0.1:8000')
            .get('/battle/mock')
            .end(function(err, res) {
                res.should.have.text('2');
            });
    });
});