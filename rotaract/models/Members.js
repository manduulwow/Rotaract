const mongoos = require('mongoose')

const memberSchema = new mongoos.Schema({
    clubId: {type: String, required: true},
    memberId: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    registerNum: {type: String, required: true, unique: true},
    memberType: {type: String, required: true},
    joinedDate: {type: Date, required: true}
})

module.exports = mongoos.model('Member',memberSchema)