const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("roles", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    });
    return Role;
}