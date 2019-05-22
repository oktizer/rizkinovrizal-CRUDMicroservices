'use strict';

module.exports = function (TOOLS, MODULES) {
    const crudService = TOOLS.SERVICES.CRUDService;
    const joi = MODULES.JOI;
    let logger = TOOLS.LOG;
    return {
        /**
         * Get message as a data for response
         */

        crudController: (params) => {
            return new Promise((resolve, reject) => {
                switch (params.method) {
                case 'POST':
                    crudService.createNewCustom(params.schema, params.value, (err, result) => {
                        let resultData;
                        if (err) {
                            resultData = {code: 500, status: 'Failed', message: 'Failed Save Data ' + params.schema, err: err.message};

                            reject(resultData);
                        } else {
                            resultData = {code: 200, message: 'Successfully saving ' + params.schema + ' data', result: result};
                            resolve(resultData);
                        }
                    });

                    break;
                case 'PUT':
                    crudService.updateCustom(params.schema, params.where, params.value, (err, result) => {
                        let resultData;
                        if (err) {
                            resultData = {code: 500, status: 'Failed', message: 'Failed Update Data ' + params.schema, err: err.message};
                            reject(resultData);
                        } else {
                            resultData = {code: 200, message: 'Successfully update ' + params.schema + ' data', result: result._doc};
                            resolve(resultData);
                        }
                    });
                    break;
                case 'GET':
                    crudService.getAll(params.schema, params.where, params.select, (err, result) => {
                        let resultData;
                        if (err) {
                            resultData = {code: 500, status: 'Failed', message: 'Failed get data ' + params.schema, err: err.message};
                            reject(resultData);
                        } else {
                            resultData = { code: 200, message: 'Successfully get data ' + params.schema };

                            resolve({code: 200, message: 'Successfully get data ' + params.schema, result: result});
                        }
                    });
                    break;
                case 'DELETE':
                    crudService.findOneCustomAndDelete(params.schema, params.where, (err, result) => {
                        let resultData;
                        if (err) {
                            resultData = {code: 500, status: 'Failed', message: 'Failed delete data ' + params.schema, err: err.message};

                            reject(resultData);
                        } else {
                            resultData = { code: 200, message: 'Succesfully deleted data ' + params.schema };
                            resolve({ code: 200, message: 'Succesfully deleted data ' + params.schema });
                        }
                    });
                    break;
                default:
                    let err = {code: 500, status: 'Failed', message: 'HTTP Method Undefined '};
                    reject(err);
                }
            });
        },

        findOneController: (params) => {
            return new Promise((resolve, reject) => {
                crudService.getOne(params.schema, params.where, (err, result) => {
                    let resultData;
                    if (err) {
                        resultData = {code: 500, status: 'Failed', message: 'Failed get data ' + params.schema, err: err.message};
                        logger.error(resultData);
                        reject(resultData);
                    } else {
                        resultData = { code: 200, message: 'Successfully get data ' + params.schema };
                        logger.info(resultData);
                        resolve({code: 200, message: 'Successfully get data ' + params.schema, result: result});
                    }
                });
            });
        },
        /**
         Creator: @rizki
         Description: controller for joi validation
         Updater @
         last_change: 11-03-2019
         Description_update: -
         */
        validateInputParams: (schema, inputBody) => {
            return new Promise((resolve, reject) => {
                joi.validate(inputBody, schema, {allowUnknown: true}, (err, value) => {
                    err ? reject(err) : resolve(value);
                });
            });
        }
    };
};
