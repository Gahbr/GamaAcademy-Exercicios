const Sequelize = require('sequelize')

const sequelize = new Sequelize('express_sequelize','root', 'mysql', {
    dialect:'mysql',
    host:'localhost',
    port:3306
});

module.exports = sequelize;
