/**
 * Created by rizkinovrizal on 17/08/17.
 */

module.exports = function (TOOLS, MODULES) {
    const crudController = TOOLS.CONTROLLERS.CRUDController;
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
                const result = await crudController.crudUserController({value: null, method: 'GET', select: 'url status', schema: 'RizkiNovrizalUser'});
                next(null, {listUrl: result.result});
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
            try {
                await crudController.crudUserController({value: previousData, method: req.method, schema: 'RizkiNovrizalUser'});
                delete previousData.url;
                delete previousData.status;
                next(null, null);
            } catch (err) {
                return next(err, null);
            }
        },



        deleteSite: async (previousData, req, res, next) => {
            try {
                const resultDelete = await crudController.crudUserController({where: req.body, method: req.method, schema: 'RizkiNovrizalUser'});
                next(null, resultDelete);
            } catch (err) {
                return next(err, null);
            }
        }
    };
};
