/**
 * Created by rakhmatullahyoga on 15/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let redisClient = TOOLS.REDIS_CLIENT;

    return {
        /**
         * Get data from redis
         * @param key {String} Redis data record key
         * @param callback {Function} Callback function
         */
        getFromRedis: function (key, callback) {
            redisClient.get(key, callback);
        },

        /**
         * Write data to redis
         * @param key {String} Redis data record key
         * @param obj {String} Redis data record value in JSON string format
         */
        saveRedis: function (key, obj, callback) {
            redisClient.set(key, obj, callback);
            // redisClient.expire(key, 18000)
        },

        updateRedis: function (key, obj, callback) {
            redisClient.getset(key, obj, callback);
            // redisClient.expire(key, 18000)
        },

        /**
         * Check if key exists in redis
         * @param key {String} Redis data record key
         * @param obj {String} Redis data record value in JSON string format
         */

        existsRedis: function (key, callback) {
            redisClient.exists(key, callback);
        },

        /**
         * Delete data in redis
         * @param key {String} Redis data record key
         * @param obj {String} Redis data record value in JSON string format
         */

        deleteRedis: function (key, callback) {
            redisClient.del(key, callback);
        }
    };
};
