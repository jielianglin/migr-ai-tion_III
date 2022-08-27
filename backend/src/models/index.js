const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire,
            idle: config.pool.idle
        }
    }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.image = require("./image.model.js")(sequelize, Sequelize);
db.tags = require("./tags.model.js")(sequelize, Sequelize);

//one-to-one relationship of users and roles

db.role.hasOne(db.user);
db.user.belongsTo(db.role);

//tracking image uploads for each user
db.user.hasMany(db.image, {
    foreignKey: "image_id"
});
db.image.belongsTo(db.role);

//junction table images_tags
db.image.belongsToMany(db.tags, {
    through: "images_tags",
    foreignKey: "image_id",
    otherKey: "tag_id"
});
db.tags.belongsToMany(db.image, {
    through: "images_tags",
    foreignKey: "tag_id",
    otherKey: "image_id"
});

//don't understand this line
db.ROLES = ["user", "admin"];
module.exports = db; 