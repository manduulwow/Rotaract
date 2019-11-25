
const Club = (sequelize) => {
    sequelize.define('club', {
        title: Sequelize.INTEGER,
        name: Sequelize.STRING
    })
}
module.exports = Club