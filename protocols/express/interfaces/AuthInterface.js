/**
 * Created by rakhmatullahyoga on 07/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let authController = TOOLS.CONTROLLERS.AuthController;
    const RedisController = TOOLS.CONTROLLERS.RedisController;
    const joi = MODULES.JOI;

    return {
        /**
         * Validate user's access token
         * @param previousData {Object} Data from previous handler, must contains: {} (null)
         * @param req {Object} Request object (express)
         * @param res {Object} Response object (express)
         * @param next {Function} Callback function for next handler
         */
        authenticate: function (previousData, req, res, next) {
            if (req.headers.authorization) {
                let token = req.headers.authorization.split(/\s+/);
                let params = {
                    accessToken: token[1]
                };
                authController.authLocal(params, function (err, result) {
                    if (err) {
                        next(err, null);
                    } else {
                        if (result === null || !result) {
                            let error = {code: 401, message: 'access token error, please login again'};
                            return next(error, null);
                        } else {
                            next(null, result);
                        }
                    }
                });
            } else {
                let error = {code: 401, message: 'access token not exist, please login again'};
                return next(error, null);
            }
        },
        tokenAuthenticated: async (previousData, req, res, next) => {
            let schema = joi.object().keys({
                api_key: joi.string().required(),
                authorization: joi.string().required()
            });
            let result;
            try {
                let value = await authController.validateInputParams(schema, req.headers);
                let existRedis = await RedisController.existsRedis({key: value.api_key});
                let token = value.authorization.split(/\s+/);
                if (existRedis === true) {
                    let resultRedis = await RedisController.getRedis({key: value.api_key});
                    result = await authController.authToken(resultRedis, token[1]);
                    next(null, result);
                } else {
                    return next({code: 500, message: 'Access token expired'}, null);
                }
            } catch (error) {
                return next(error, null);
            }
        }
    };
};
