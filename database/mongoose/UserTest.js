/**
 * Created by rizkinovrizal on 05/09/17.
 */
'use strict';

module.exports = function (MODULES) {
    let mongoose = MODULES.MONGOOSE;
    let Schema = mongoose.Schema;

    let userTestSchema = new Schema({
        userName: {type: String, required: true, unique: true},
        accountNumber: {type: String, required: true, unique: true},
        emailAddress: {type: String, required: true, unique: true},
        identityNumber: {type: String, required: true, unique: true}
    }, {timestamps: {}});

    userTestSchema.index({'accountNumber': 'text', 'identityNumber': 'text'});
    return userTestSchema;
};
