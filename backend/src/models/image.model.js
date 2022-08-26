module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("image", {
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
        },
        data: {
            type: DataTypes.BLOB("long"),
        },
        annotation: {
            type: DataTypes.BLOB("long"),
        },
        description: {
            type: DataTypes.TEXT,
        },

    });
    return Image;
};