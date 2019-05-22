/**
 * Created by rizkinovrizal on 17/08/17.
 */

module.exports = function (TOOLS, MODULES) {
    const authController = TOOLS.CONTROLLERS.AuthController;
    const RedisController = TOOLS.CONTROLLERS.RedisController;
    const CRUDController = TOOLS.CONTROLLERS.CRUDController;
    const joi = MODULES.JOI;
    const logger = TOOLS.LOG;

    return {
        /**
         * Interface for get list all user from db
         * @param previousData {Object} Data from previous handler
         * @param req {Object} Request object (express)
         * @param res {Object} Response object (express)
         * @param next {Function} Callback function for next handler
         */

        getListVehicle: async function (previousData, req, res, next) {
            try {
                const result = await CRUDController.crudController({value: null, method: 'GET', select: null, schema: 'RizkiNovrizalVehicle'});
                next(null, {result: result.result});
            } catch (err) {
                return next(err, null);
            }
        },

        /**
         * Interface for get list one vehicle data from db
         * if vehicle data existing in redis, get from redis, if does'nt get from db
         * @param previousData {Object} Data from previous handler
         * @param req {Object} Request object (express)
         * @param res {Object} Response object (express)
         * @param next {Function} Callback function for next handler
         */

        getListOneVehicle: async function (previousData, req, res, next) {
            let schema = joi.object().keys({
                noPol: joi.string().required('')
            });
            let result;
            try {
                let value = await authController.validateInputParams(schema, req.query);
                let existRedis = await RedisController.existsRedis({key: value.noPol});
                if (existRedis === true) {
                    result = await RedisController.getRedis({key: value.noPol});
                } else {
                    let resultDB = await CRUDController.findOneController({where: value, method: 'GET', select: null, schema: 'RizkiNovrizalVehicle'});
                    result = resultDB.result;
                }
                next(null, result);
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

        insertVehicle: async function (previousData, req, res, next) {
            let schema = joi.object().keys({
                noPol: joi.string().required(),
                brand: joi.string().required(),
                type: joi.string().required(),
                volume: joi.number().required()
            });
            try {
                let value = await authController.validateInputParams(schema, req.body);
                let result = await CRUDController.crudController({value: value, method: req.method, schema: 'RizkiNovrizalVehicle'});
                let resultRedis = await RedisController.setRedis({key: value.noPol, Obj: result.result._doc});
                logger.info('Saving Data to Redis = ', resultRedis);
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

        updateVehicle: async function (previousData, req, res, next) {
            let schema = joi.object().keys({
                noPol: joi.string().required(),
                brand: joi.string().allow(''),
                type: joi.string().allow(''),
                volume: joi.number().allow('')
            });
            try {
                let value = await authController.validateInputParams(schema, req.body);
                let result = await CRUDController.crudController({value: value, where: value.accountNumber, method: req.method, schema: 'RizkiNovrizalVehicle'});
                let resultRedis = await RedisController.setRedis({key: value.noPol, Obj: result.result});
                logger.info('Update Data in Redis = ', resultRedis);
                next(null, result);
            } catch (err) {
                return next(err, null);
            }
        },

        /**
         * Interface for delete user data by noPol
         * @param previousData {Object} Data from previous handler
         * @param req {Object} Request object (express)
         * @param res {Object} Response object (express)
         * @param next {Function} Callback function for next handler
         */

        deleteVehicle: async (previousData, req, res, next) => {
            let schema = joi.object().keys({
                noPol: joi.string().required()
            });
            try {
                let value = await authController.validateInputParams(schema, req.body);
                const resultDelete = await CRUDController.crudController({where: value, method: req.method, schema: 'RizkiNovrizalVehicle'});
                const resultRedis = await RedisController.deleteRedis({key: value.noPol});
                logger.info('Delete Data in Redis = ', resultRedis);
                next(null, resultDelete);
            } catch (err) {
                return next(err, null);
            }
        }
    };
};
