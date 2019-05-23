
let mongoose = require('mongoose');
let redis = require('redis');

describe('Database connectivity', function () {
    before('load environments', function () {
        // if (process.env.NODE_ENV !== 'production') {
        //     require('dotenv').config();
        // }
        require('dotenv').load();
    });

    describe('Mongoose schema', function () {
        it('should connect to mongoose and mongodb server', function (done) {
            mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, done);
        });
    });
    describe('Redis in-memory data', function () {
        it('should connect to redis server', function (done) {
            let redisClient = redis.createClient(process.env.REDIS_URL);
            redisClient.on('connect', function () {
                done();
            });
            redisClient.on('error', function () {
                done(new Error('cannot connect to redis'));
            });
        });
    });
});
