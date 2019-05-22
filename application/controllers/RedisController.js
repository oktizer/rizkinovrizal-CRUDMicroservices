/**
 * Created by rakhmatullahyoga on 07/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES) {
    let RedisService = TOOLS.SERVICES.RedisService;
    let logger = TOOLS.LOG;

    return {
        /**
         * Controller for get and set Redis
         * @param params {Object} Authentication object contains 'accessToken'
         * @param callback {Function} Callback function
         */
        setRedis: function (params) {
            return new Promise((resolve, reject) => {
                RedisService.saveRedis(params.key, JSON.stringify(params.Obj), (err, result) => {
                    if (err) {
                        reject(err);
                    } else {
                        logger.info('Saving Data to redis : ' + result);
                        RedisService.getFromRedis(params.key, (errData, resultData) => {
                            if (err) {
                                reject(errData);
                            } else {
                                let resultRedis = JSON.parse(resultData);
                                logger.info('Data from redis after save = ', resultRedis);
                                resolve(resultRedis);
                            }
                        });
                    }
                });
            });
        },

        getRedis: function (params) {
            return new Promise((resolve, reject) => {
                RedisService.getFromRedis(params.key, function (err, result) {
                    if (err) {
                        logger.error(err);
                        reject(err);
                    } else {
                        result = JSON.parse(result);
                        if (result) {
                            logger.info('Get data from redis = ', JSON.stringify(result));
                            resolve(result);
                        } else {
                            let errResult = {code: 200, message: 'Empty data', key: params.id};
                            logger.error(errResult);
                            reject(errResult);
                        }
                    }
                });
            });
        },

        existsRedis: function (params) {
            return new Promise((resolve, reject) => {
                RedisService.existsRedis(params.key, (err, reply) => {
                    if (err) {
                        reject(err);
                    } else {
                        let result = reply === 1;
                        resolve(result);
                    }
                });
            });
        },

        deleteRedis: function (params) {
            return new Promise((resolve, reject) => {
                RedisService.deleteRedis(params.key, (err, result) => {
                    if (err) {
                        logger.error('Failed delete redis data with key : ' + params.key);
                        reject(err);
                    } else {
                        logger.info('Successfully delete redis data with key : ' + params.key);
                        resolve(result);
                    }
                });
            });
        }

    };
};
