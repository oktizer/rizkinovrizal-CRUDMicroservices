/**
 * Created by rizkinovrizal on 05/09/17.
 */
'use strict';

module.exports = function (MODULES) {
    let mongoose = MODULES.MONGOOSE;
    let Schema = mongoose.Schema;

    let rizkiNovrizalUserSchema = new Schema({
        noPol: {type: String, required: true, unique: true},
        brand: {type: String},
        type: {type: String},
        volume: {type: Number}
    }, {timestamps: {}});

    rizkiNovrizalUserSchema.index({'accountNumber': 'text', 'identityNumber': 'text'});
    return rizkiNovrizalUserSchema;
};
