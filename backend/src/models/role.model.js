module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("roles", {
        id: {
            type: DataTypes.CHAR(36),
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        }
    });
    return Role;
}