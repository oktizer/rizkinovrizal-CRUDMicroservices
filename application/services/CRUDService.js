'use strict';

module.exports = function (TOOLS) {
    const schema = TOOLS.SCHEMA;
    return {

        /**
         * Get one user which fulfill where criteria in parameters
         * @param where {Object} Where criteria
         * @param callback {Function} [callback] Callback function which is called when function call finished
         */
        createNewCustom: function (schemaName, attributes, callback) {
            schema[schemaName].create(attributes, (err, result) => {
                if (err) {
                    return callback(err, null);
                } else {
                    callback(null, result);
                }
            });
        },
        /**
         * Get return data for testing
         * @param params {Object} Any JSON Object
         * @param callback {Function} Callback function
         */
        getAll: function (schemaName, where, select, callback) {
            schema[schemaName].find(where, select, (err, result) => {
                if (err) {
                    return callback(err, null);
                } else {
                    callback(null, result);
                }
            });
        },

        getOne: function (schemaName, where, callback) {
            schema[schemaName].findOne(where, (err, result) => {
                if (err) {
                    return callback(err, null);
                } else {
                    callback(null, result);
                }
            });
        },

        updateCustom: function (schemaName, where, attributes, callback) {
            schema[schemaName].findOneAndUpdate(where, {$set: attributes}, {new: true}, (err, result) => {
                if (err) {
                    return callback(err, null);
                } else {
                    callback(null, result);
                }
            });
        },

        findOneCustomAndDelete: function (schemaName, where, callback) {
            schema[schemaName].deleteOne(where, (err, result) => {
                if (err) {
                    return callback(err, null);
                } else {
                    callback(null, result);
                }
            });
        }

    };
};
