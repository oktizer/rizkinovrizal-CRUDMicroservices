/**
 * Created by rizkinovrizal on 17/08/17.
 */

module.exports = function (TOOLS, MODULES) {
    const authController = TOOLS.CONTROLLERS.AuthController;
    // const RedisController = TOOLS.CONTROLLERS.RedisController;
    const CRUDController = TOOLS.CONTROLLERS.CRUDController;

    const joi = MODULES.JOI;

    return {
        /**
         * Interface for get list all user from db
         * @param previousData {Object} Data from previous handler
         * @param req {Object} Request object (express)
         * @param res {Object} Response object (express)
         * @param next {Function} Callback function for next handler
         */

        getListUser: async function (previousData, req, res, next) {
            try {
                const result = await CRUDController.crudController({value: null, method: 'GET', select: null, schema: 'RizkiNovrizalUser'});
                next(null, {result: result.result});
            } catch (err) {
                return next(err, null);
            }
        },

        /**
         * Interface for get list all user from db
         * @param previousData {Object} Data from previous handler
         * @param req {Object} Request object (express)
         * @param res {Object} Response object (express)
         * @param next {Function} Callback function for next handler
         */

        getListOneUser: async function (previousData, req, res, next) {
            let schema = joi.object().keys({
                accountNumber: joi.string().allow(''),
                identityNumber: joi.string().allow('')
            });
            try {
                let value = await authController.validateInputParams(schema, req.query);
                const result = await CRUDController.findOneController({where: value, method: 'GET', select: null, schema: 'RizkiNovrizalUser'});
                next(null, result.result);
            } catch (err) {
                return next(err, null);
            }
        },

        /**
         * Interface for insert user data into db
         * @param previousData {Object} Data from previous handler
         * @param req {Object} Request object (express)
         * @param res {Object} Response object (express)
         * @param next {Function} Callback function for next handler
         */

        insertUser: async function (previousData, req, res, next) {
            let schema = joi.object().keys({
                userName: joi.string().required(),
                accountNumber: joi.string().required(),
                emailAddress: joi.string().required(),
                identityNumber: joi.string().required()
            });
            try {
                let value = await authController.validateInputParams(schema, req.body);
                let result = await CRUDController.crudController({value: value, method: req.method, schema: 'RizkiNovrizalUser'});
                next(null, result);
            } catch (err) {
                return next(err, null);
            }
        },

        /**
         * Interface for update user data into db by account number
         * @param previousData {Object} Data from previous handler
         * @param req {Object} Request object (express)
         * @param res {Object} Response object (express)
         * @param next {Function} Callback function for next handler
         */

        updateUser: async function (previousData, req, res, next) {
            let schema = joi.object().keys({
                userName: joi.string().allow(''),
                accountNumber: joi.string().required(),
                emailAddress: joi.string().allow(''),
                identityNumber: joi.string().allow('')
            });
            try {
                let value = await authController.validateInputParams(schema, req.body);
                let result = await CRUDController.crudController({value: value, where: value.accountNumber, method: req.method, schema: 'RizkiNovrizalUser'});
                next(null, result);
            } catch (err) {
                return next(err, null);
            }
        },

        /**
         * Interface for delete user data by account number
         * @param previousData {Object} Data from previous handler
         * @param req {Object} Request object (express)
         * @param res {Object} Response object (express)
         * @param next {Function} Callback function for next handler
         */

        deleteUser: async (previousData, req, res, next) => {
            let schema = joi.object().keys({
                userName: joi.string().allow(''),
                accountNumber: joi.string().allow(''),
                emailAddress: joi.string().allow(''),
                identityNumber: joi.string().allow('')
            });
            try {
                let value = await authController.validateInputParams(schema, req.body);
                const resultDelete = await CRUDController.crudController({where: value, method: req.method, schema: 'RizkiNovrizalUser'});
                next(null, resultDelete);
            } catch (err) {
                return next(err, null);
            }
        }
    };
};
