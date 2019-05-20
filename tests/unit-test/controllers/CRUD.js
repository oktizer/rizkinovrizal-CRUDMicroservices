
const chai = require('chai');
let CRUDController;
let should = chai.should();

describe('Controller: CRUDController', function () {
    before('load helpers', function (done) {
        CRUDController = global.controllers.CRUDController;
        done();
    });

    describe('Controller for create data', () => {
        it('should return result object and message', async () => {
            let result = await CRUDController.crudUserController({
                schema: 'UserTest',
                value: {
                    userName: 'oktizer',
                    accountNumber: '12334545767867',
                    emailAddress: 'oktizer@gmail.com',
                    identityNumber: '1472012705880021'
                },
                method: 'POST'});
            should.exist(result);
            result.should.be.an('object');
            result.code.should.be.a('number');
            result.code.should.equal(200);
            result.message.should.be.a('string');
            result.message.should.equal('Successfully saving UserTest data');
        });
    });

    describe('Controller for get data', () => {
        it('should return result object and message', async () => {
            let result = await CRUDController.crudUserController({
                schema: 'UserTest',
                value: null,
                select: null,
                method: 'GET'});
            should.exist(result);
            result.should.be.an('object');
            result.code.should.be.a('number');
            result.code.should.equal(200);
            result.message.should.be.a('string');
            result.message.should.equal('Successfully get data UserTest');
            result.result.should.be.an('array');
        });
    });

    describe('Controller for get user data by accountNumber ', () => {
        it('should return result object and message', async () => {
            let result = await CRUDController.crudUserController({
                schema: 'UserTest',
                where: {
                    accountNumber: '12334545767867'
                },
                select: null,
                method: 'GET'});
            should.exist(result);
            result.should.be.an('object');
            result.code.should.be.a('number');
            result.code.should.equal(200);
            result.message.should.be.a('string');
            result.message.should.equal('Successfully get data UserTest');
            result.result.should.be.an('array');
        });
    });

    describe('Controller for update data', () => {
        it('should return result object and message', async () => {
            let result = await CRUDController.crudUserController({
                schema: 'UserTest',
                where: {
                    accountNumber: '12334545767867'
                },
                value: {
                    emailAddress: 'oktizer@gmail.com'
                },
                method: 'PUT'});
            should.exist(result);
            result.should.be.an('object');
            result.code.should.be.a('number');
            result.code.should.equal(200);
            result.message.should.be.a('string');
            result.message.should.equal('Successfully update UserTest data');
        });
    });

    describe('Controller for get user data by Identity Number', () => {
        it('should return result object and message', async () => {
            let result = await CRUDController.crudUserController({
                schema: 'UserTest',
                where: {
                    identityNumber: '1472012705880021'
                },
                select: null,
                method: 'GET'});
            should.exist(result);
            result.should.be.an('object');
            result.code.should.be.a('number');
            result.code.should.equal(200);
            result.message.should.be.a('string');
            result.message.should.equal('Successfully get data UserTest');
            result.result.should.be.an('array');
        });
    });

    describe('Controller for delete data by accountNumber', () => {
        it('should return result object and message', async () => {
            let result = await CRUDController.crudUserController({
                schema: 'UserTest',
                value: {
                    accountNumber: '12334545767867'
                },
                method: 'DELETE'});
            should.exist(result);
            result.should.be.an('object');
            result.code.should.be.a('number');
            result.code.should.equal(200);
            result.message.should.be.a('string');
            result.message.should.equal('Succesfully deleted data UserTest');
        });
    });
});
