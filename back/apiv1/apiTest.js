const request   = require('supertest');
const should    = require('should');
const app       = require('../index.js');

describe('GET /api/v1/location', function () {
    it('responds a STRING with the city name from the user', function (done) {
        request(app)
            .get('/api/v1/location')
            .set('Accept', 'application/json')
            .expect('Content-Type', "text/html; charset=utf-8")
            .expect(200)
            .end(function(err, res){
                if(err){
                    done(err);
                }
                else {
                    done();
                }
            });
    });
});

describe('GET /api/v1/current', function () {
    it('responds a JSON with the weather information from today', function (done) {
        request(app)
            .get('/api/v1/current')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res){
                if(err){
                    done(err);
                }
                else {
                    let currentCityData = res.body;
                    should(currentCityData).have.property('temp');
                    should(currentCityData).have.property('maxTemp');
                    should(currentCityData).have.property('minTemp');
                    should(currentCityData).have.property('humidity');
                    done();
                }
            });
    });
});

describe('GET /api/v1/forecast', function () {
    it('responds a JSON with the weather information from the next 5 days', function (done) {
        request(app)
            .get('/api/v1/forecast')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res){
                if(err){
                    done(err);
                }
                else {
                    //Tienen que haber 5 keys, cada key un día.
                    let days = res.body;
                    Object.keys(days).length.should.be.exactly(5);
                    done();
                }
            });
    });
});