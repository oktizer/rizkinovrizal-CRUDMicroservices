/**
 * Created by rakhmatullahyoga on 07/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES) {
    const RedisService = TOOLS.SERVICES.RedisService;
    const joi = MODULES.JOI;
    // let logger = TOOLS.LOG;

    return {
        /**
         * Authenticate user token from Redis cached memory
         * @param params {Object} Authentication object contains 'accessToken'
         * @param callback {Function} Callback function
         */
        authLocal: function (params, callback) {
            const key = params.accessToken;
            RedisService.getFromRedis(key, function (err, result) {
                if (err) {
                    callback(err, null);
                } else {
                    result = JSON.parse(result);
                    if (result) {
                        callback(null, {userData: result});
                    } else {
                        callback(null, null);
                    }
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
