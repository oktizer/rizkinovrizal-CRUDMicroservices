/**
 * Created by rakhmatullahyoga on 07/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let authController = TOOLS.CONTROLLERS.AuthController;
    let logger = TOOLS.LOG;

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
        }
    };
};
