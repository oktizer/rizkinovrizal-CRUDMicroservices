/**
 * Created by rakhmatullahyoga on 15/09/17.
 */

'use strict';

module.exports = function (TOOLS, MODULES, CONSTANTS) {
    let redisClient = TOOLS.REDIS_CLIENT;

    return {
        /**
         * Get authentication data from redis
         * @param key {String} Redis data record key
         * @param callback {Function} Callback function
         */
        getFromRedis: function (key, callback) {
            redisClient.get(key, callback);
        },

        /**
         * Write authentication data to redis
         * @param key {String} Redis data record key
         * @param obj {String} Redis data record value in JSON string format
         */
        saveRedis: function (key, obj) {
            redisClient.set(key, obj);
            // redisClient.expire(key, 1800);
        }
    };
};
