
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

describe('API Endpoints ', function () {
    let path = '/user/crud';
    let headers = [{
        key: 'Api_key',
        value: '9049975b0bcd02fade6c109893c30124736a880e'
    },
    {
        key: 'Authorization',
        value: 'Bearer eyJhbGciOiJIUzI1NiJ9.cml6a2lub3ZyaXphbEBnbWFpbC5jb20.2hVlSDJAqqz8bJ_zEJl8xWDBAO1j1swPYbuT6W3gaws'
    }];
    describe('POST: Insert User Data', function () {
        it('should return new data', function (done) {
            let chaiRequest = chai.request(global.express_server).post(path);
            for (let i = 0; i < headers.length; i++) {
                chaiRequest.set(headers[ i ].key, headers[ i ].value);
            }
            chaiRequest.send({
                'userName': 'rizkinovrizal',
                'accountNumber': '0987654321',
                'emailAddress': 'rizkinovrizal@gmail.com',
                'identityNumber': '147201270588'
            }).end(function (err, result) {
                if (err) {
                    let errData = err.response.body;
                    should.exist(err);
                    should.exist(errData);
                    errData.should.be.an('object');
                    errData.code.should.equal(500);
                    done(err);
                } else {
                    let data = result.body.data.result;
                    should.exist(result);
                    should.exist(data);
                    data.should.be.an('object');
                    result.body.code.should.be.a('number');
                    result.body.code.should.equal(200);
                    result.body.message.should.be.a('string');
                    result.body.message.should.equal('Successfully saving RizkiNovrizalUser data');
                    data.userName.should.be.a('string');
                    data.userName.should.equal('rizkinovrizal');
                    data.accountNumber.should.be.a('string');
                    data.accountNumber.should.equal('0987654321');
                    data.emailAddress.should.be.a('string');
                    data.emailAddress.should.equal('rizkinovrizal@gmail.com');
                    data.identityNumber.should.be.a('string');
                    data.identityNumber.should.equal('147201270588');
                    done();
                }
            });
        });
    });

    describe('GET: Get List User', function () {
        it('should return list of user data', function (done) {
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

    describe('GET: Get one user data', function () {
        let pathOne = '/user/crud/one';
        it('should return one data by accountNumber', function (done) {
            let chaiRequest = chai.request(global.express_server).get(pathOne);
            for (let i = 0; i < headers.length; i++) {
                chaiRequest.set(headers[ i ].key, headers[ i ].value);
            }
            chaiRequest.query(
                {
                    accountNumber: '0987654321'
                }
            ).end(function (err, response) {
                if (err) {
                    done(err);
                } else {
                    let data = response.body.data;
                    response.should.have.status(200);
                    response.should.be.an('object');
                    response.body.data.should.be.an('object');
                    data.accountNumber.should.be.a('string');
                    data.accountNumber.should.equal('0987654321');
                    data.emailAddress.should.be.a('string');
                    data.emailAddress.should.equal('rizkinovrizal@gmail.com');
                    data.identityNumber.should.be.a('string');
                    data.identityNumber.should.equal('147201270588');
                    data.userName.should.be.a('string');
                    data.userName.should.equal('rizkinovrizal');
                    done();
                }
            });
        });
        it('should return one data by identity Number', function (done) {
            let chaiRequest = chai.request(global.express_server).get(pathOne);
            for (let i = 0; i < headers.length; i++) {
                chaiRequest.set(headers[ i ].key, headers[ i ].value);
            }
            chaiRequest.query(
                {
                    identityNumber: '147201270588'
                }
            ).end(function (err, response) {
                if (err) {
                    done(err);
                } else {
                    let data = response.body.data;
                    response.should.have.status(200);
                    response.should.be.an('object');
                    response.body.data.should.be.an('object');
                    data.accountNumber.should.be.a('string');
                    data.accountNumber.should.equal('0987654321');
                    data.emailAddress.should.be.a('string');
                    data.emailAddress.should.equal('rizkinovrizal@gmail.com');
                    data.identityNumber.should.be.a('string');
                    data.identityNumber.should.equal('147201270588');
                    data.userName.should.be.a('string');
                    data.userName.should.equal('rizkinovrizal');
                    done();
                }
            });
        });
    });

    describe('POST: Update User Data', function () {
        it('should return after update data', function (done) {
            let chaiRequest = chai.request(global.express_server).put(path);
            for (let i = 0; i < headers.length; i++) {
                chaiRequest.set(headers[ i ].key, headers[ i ].value);
            }
            chaiRequest.send(
                {
                    'accountNumber': '0987654321',
                    'emailAddress': 'novrizalrizki@gmail.com'
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
                    result.body.message.should.equal('Successfully update RizkiNovrizalUser data');
                    data.userName.should.be.a('string');
                    data.userName.should.equal('rizkinovrizal');
                    data.accountNumber.should.be.a('string');
                    data.accountNumber.should.equal('0987654321');
                    data.emailAddress.should.be.a('string');
                    data.emailAddress.should.equal('novrizalrizki@gmail.com');
                    data.identityNumber.should.be.a('string');
                    data.identityNumber.should.equal('147201270588');
                    done();
                }
            });
        });
    });

    describe('DELETE: Delete User data by accountNumber', function () {
        it('should delete selected user data and return response message', function (done) {
            let chaiRequest = chai.request(global.express_server).delete(path);
            for (let i = 0; i < headers.length; i++) {
                chaiRequest.set(headers[ i ].key, headers[ i ].value);
            }
            chaiRequest.send(
                {
                    'accountNumber': '0987654321'
                }
            ).end(function (err, response) {
                if (err) {
                    done(err);
                } else {
                    response.should.have.status(200);
                    response.should.be.an('object');
                    response.body.message.should.equal('Succesfully deleted data RizkiNovrizalUser');
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
