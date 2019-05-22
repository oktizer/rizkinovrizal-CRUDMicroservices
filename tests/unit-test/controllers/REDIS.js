
const chai = require('chai');
let REDISController;

let should = chai.should();

describe('Controller: REDISController', function () {
    before('load helpers', function (done) {
        REDISController = global.controllers.RedisController;
        done();
    });

    describe('Controller for insert data to redis', () => {
        it('should return result object and message', async () => {
            let result = await REDISController.setRedis({
                key: 'B 1234 PN',
                Obj: {
                    noPol: 'B 1234 PN',
                    brand: 'Toyota Camry',
                    type: 'sedan',
                    volume: 2400
                }});
            should.exist(result);
            result.should.be.an('object');
            result.noPol.should.be.a('string');
            result.noPol.should.equal('B 1234 PN');
            result.brand.should.be.a('string');
            result.brand.should.equal('Toyota Camry');
            result.type.should.be.a('string');
            result.type.should.equal('sedan');
            result.volume.should.be.a('number');
            result.volume.should.equal(2400);
        });
    });

    describe('Controller for get data redis', () => {
        it('should return result redis object and message', async () => {
            const result = await REDISController.getRedis({key: 'B 1234 PN'});
            should.exist(result);
            result.should.be.an('object');
            result.noPol.should.be.a('string');
            result.noPol.should.equal('B 1234 PN');
            result.brand.should.be.a('string');
            result.brand.should.equal('Toyota Camry');
            result.type.should.be.a('string');
            result.type.should.equal('sedan');
            result.volume.should.be.a('number');
            result.volume.should.equal(2400);
        });
    });

    describe('Controller for update data', () => {
        it('should return result object and message', async () => {
            const result = await REDISController.setRedis({
                key: 'B 1234 PN',
                Obj: {
                    noPol: 'B 1234 PN',
                    brand: 'Toyota Corolla',
                    type: 'sedan',
                    volume: 1800
                }
            });
            should.exist(result);
            result.should.be.an('object');
            result.noPol.should.be.a('string');
            result.noPol.should.equal('B 1234 PN');
            result.brand.should.be.a('string');
            result.brand.should.equal('Toyota Corolla');
            result.type.should.be.a('string');
            result.type.should.equal('sedan');
            result.volume.should.be.a('number');
            result.volume.should.equal(1800);
        });
    });
    describe('Controller for delete data by accountNumber', () => {
        it('should return result object and message', async () => {
            let result = await REDISController.deleteRedis({
                key: 'B 1234 PN'
            });
            should.exist(result);
        });
    });
});
