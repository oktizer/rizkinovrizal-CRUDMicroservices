/**
 * Created by rakhmatullahyoga on 07/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES) {
    const RedisService = TOOLS.SERVICES.RedisService;
    const joi = MODULES.JOI;
    const jwtService = TOOLS.SERVICES.JwtService;

    return {
        /**
         * Authenticate user token from Redis cached memory
         * @param params {Object} Authentication object contains 'accessToken'
         * @param callback {Function} Callback function
         */

        authToken: function (resultRedis, token) {
            return new Promise((resolve, reject) => {
                if (resultRedis.token === token) {
                    jwtService.decodeJWT(resultRedis.token, (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
                } else {
                    let errFailedToken = {
                        code: 500,
                        message: 'Wrong token, token expired'
                    };
                    reject(errFailedToken);
                }
            });
        },

        /**
         Creator: @rizki
         Description: method controller untuk memvalidasi inputan data menggunakan joi
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
