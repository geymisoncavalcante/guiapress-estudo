const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress','postgres','123',{
    host: 'localhost',
    dialect: 'postgres',
    timezone: "-03:00"
});

module.exports = connection;
