module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define("tags", {
        id: {
            type: DataTypes.CHAR(36),
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        type: {
            type: DataTypes.STRING,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
        },

    });
    return Tag;
};