const chai = require('chai');
let crudService;
let should = chai.should();

describe('Service: CRUDService', function () {
    before('load helpers', function (done) {
        crudService = global.services.CRUDService;
        done();
    });

    describe('Create New Data', function () {
        it('should response new object after save data', function (done) {
            crudService.createNewCustom('UserTest',
                {
                    userName: 'rickz5588',
                    accountNumber: '1234567890',
                    emailAddress: 'rickz5588@gmail.com',
                    identityNumber: '1472012705880000'
                }, function (err, result) {
                    should.not.exist(err);
                    should.exist(result);
                    result.should.be.an('object');
                    result.userName.should.be.a('string');
                    result.userName.should.equal('rickz5588');
                    result.accountNumber.should.be.a('string');
                    result.accountNumber.should.equal('1234567890');
                    result.emailAddress.should.be.a('string');
                    result.emailAddress.should.equal('rickz5588@gmail.com');
                    result.identityNumber.should.be.a('string');
                    result.identityNumber.should.equal('1472012705880000');
                    done();
                });
        });
    });

    describe('Get all data', function () {
        it('should response all list data', function (done) {
            crudService.getAll('UserTest', null, null, function (err, result) {
                should.not.exist(err);
                should.exist(result);
                result.should.be.an('array');
                done();
            });
        });
    });

    describe('Get data by account Number', function () {
        it('should response detail data with account Number = 1234567890', function (done) {
            crudService.getAll('UserTest',
                {
                    accountNumber: '1234567890'
                }, null, function (err, result) {
                    should.not.exist(err);
                    should.exist(result);
                    result.should.be.an('array');
                    done();
                });
        });
    });

    describe('Get data by identity Number', function () {
        it('should response detail data with identity Number = 1472012705880000', function (done) {
            crudService.getAll('UserTest',
                {
                    identityNumber: '1472012705880000'
                }, null, function (err, result) {
                    should.not.exist(err);
                    should.exist(result);
                    result.should.be.an('array');
                    done();
                });
        });
    });

    describe('Update existing data', function () {
        it('should response new value in field which update before', function (done) {
            crudService.updateCustom('UserTest',
                {
                    accountNumber: '1234567890'
                },
                {
                    emailAddress: 'rizkinovrizal@gmail.com'
                },
                function (err, result) {
                    if (err) {
                        done();
                    }
                    should.exist(result);
                    result.should.be.an('object');
                    result.accountNumber.should.be.a('string');
                    result.accountNumber.should.equal('1234567890');
                    result.emailAddress.should.be.a('string');
                    result.emailAddress.should.equal('rizkinovrizal@gmail.com');
                    done();
                });
        });
    });

    describe('Delete existing data', function () {
        it('should response object has been deleted', function (done) {
            crudService.findOneCustomAndDelete('UserTest',
                {
                    accountNumber: '1234567890'
                }, function (err, result) {
                    should.not.exist(err);
                    should.exist(result);
                    result.should.be.an('object');
                    done();
                });
        });
    });
});
