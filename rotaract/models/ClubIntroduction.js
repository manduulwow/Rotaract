const mongoos = require('mongoose')

const ClubIntroductionSchema = new mongoos.Schema({
    clubId: {type: String, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    charterDate: {type: Date, required: true},
    introduction: {type: String, required: true}
})

module.exports = mongoos.model('ClubIntroduction',ClubIntroductionSchema)