
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

describe('API Endpoints ', function () {
    let path = '/vehicle/crud';
    let headers = [{
        key: 'Api_key',
        value: '333d5c56330ec7fe8751d39d3d6a51734e21a6ac'
    },
    {
        key: 'Authorization',
        value: 'Bearer eyJhbGciOiJIUzI1NiJ9.cml6a2lub3ZyaXphbEBnbWFpbC5jb20.2hVlSDJAqqz8bJ_zEJl8xWDBAO1j1swPYbuT6W3gaws'
    }];
    describe('POST: Insert vehicle Data', function () {
        it('should save and return new data after insert', function (done) {
            let chaiRequest = chai.request(global.express_server).post(path);
            for (let i = 0; i < headers.length; i++) {
                chaiRequest.set(headers[ i ].key, headers[ i ].value);
            }
            chaiRequest.send(
                {
                    'noPol': 'B 1234 PN',
                    'brand': 'Toyota Camry',
                    'type': 'sedan',
                    'volume': 2400
                }).end(function (err, result) {
                if (err) {
                    done(err);
                } else {
                    let data = result.body.data.result;
                    should.exist(result);
                    should.exist(data);
                    data.should.be.an('object');
                    result.body.code.should.be.a('number');
                    result.body.code.should.equal(200);
                    result.body.message.should.be.a('string');
                    result.body.message.should.equal('Successfully saving RizkiNovrizalVehicle data');
                    data.noPol.should.be.a('string');
                    data.noPol.should.equal('B 1234 PN');
                    data.brand.should.be.a('string');
                    data.brand.should.equal('Toyota Camry');
                    data.volume.should.be.a('number');
                    data.volume.should.equal(2400);
                    done();
                }
            });
        });
    });

    describe('GET: Get List Vehicle', function () {
        it('should return list of vehicle data', function (done) {
            let chaiRequest = chai.request(global.express_server).get(path);
            for (let i = 0; i < headers.length; i++) {
                chaiRequest.set(headers[ i ].key, headers[ i ].value);
            }
            chaiRequest.end(function (err, response) {
                if (err) {
                    done(err);
                } else {
                    response.should.have.status(200);
                    response.should.be.an('object');
                    response.body.data.should.be.an('object');
                    done();
                }
            });
        });
    });

    describe('GET: Get one vehicle data', function () {
        let pathOne = '/vehicle/crud/one';
        it('should return one vehicle data detail by noPol', function (done) {
            let chaiRequest = chai.request(global.express_server).get(pathOne);
            for (let i = 0; i < headers.length; i++) {
                chaiRequest.set(headers[ i ].key, headers[ i ].value);
            }
            chaiRequest.query(
                {
                    noPol: 'B 1234 PN'
                }
            ).end(function (err, response) {
                if (err) {
                    done(err);
                } else {
                    let data = response.body.data;
                    response.should.have.status(200);
                    response.body.should.be.an('object');
                    response.body.data.should.be.an('object');
                    data.brand.should.be.a('string');
                    data.brand.should.equal('Toyota Camry');
                    data.noPol.should.be.a('string');
                    data.noPol.should.equal('B 1234 PN');
                    data.type.should.be.a('string');
                    data.type.should.equal('sedan');
                    data.volume.should.be.a('number');
                    data.volume.should.equal(2400);
                    done();
                }
            });
        });
    });

    describe('POST: Update Vehicle Data', function () {
        it('should return data after update', function (done) {
            let chaiRequest = chai.request(global.express_server).put(path);
            for (let i = 0; i < headers.length; i++) {
                chaiRequest.set(headers[ i ].key, headers[ i ].value);
            }
            chaiRequest.send(
                {
                    'noPol': 'B 1234 PN',
                    'brand': 'Toyota Corolla',
                    'type': 'sedan',
                    'volume': 1800
                }).end(function (err, result) {
                if (err) {
                    done(err);
                } else {
                    let data = result.body.data.result;
                    should.exist(result);
                    should.exist(data);
                    data.should.be.an('object');
                    result.body.code.should.be.a('number');
                    result.body.code.should.equal(200);
                    result.body.message.should.be.a('string');
                    result.body.message.should.equal('Successfully update RizkiNovrizalVehicle data');
                    data.noPol.should.be.a('string');
                    data.noPol.should.equal('B 1234 PN');
                    data.brand.should.be.a('string');
                    data.brand.should.equal('Toyota Corolla');
                    data.type.should.be.a('string');
                    data.type.should.equal('sedan');
                    data.volume.should.be.a('number');
                    data.volume.should.equal(1800);
                    done();
                }
            });
        });
    });

    describe('DELETE: Delete vehicle data by noPol', function () {
        it('should delete selected vehicle data and return response message', function (done) {
            let chaiRequest = chai.request(global.express_server).delete(path);
            for (let i = 0; i < headers.length; i++) {
                chaiRequest.set(headers[ i ].key, headers[ i ].value);
            }
            chaiRequest.send(
                {
                    'noPol': 'B 1234 PN'
                }
            ).end(function (err, response) {
                if (err) {
                    done(err);
                } else {
                    response.should.have.status(200);
                    response.should.be.an('object');
                    response.body.message.should.equal('Succesfully deleted data RizkiNovrizalVehicle');
                    done();
                }
            });
        });
    });

    after('close application server', function (done) {
        global.express_server.close();
        done();
    });
});
