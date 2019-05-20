
let mongoose = require('mongoose');

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
});
