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
//db.annotation = require("./annotation.model.js")(sequelize, Sequelize);

//junction table user_roles
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
})
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"

});

//tracking image uploads for each user
// db.role.hasMany(db.image, {
//     foreignKey: "imageId"
// });
// db.image.belongsTo(db.role);

//junction table images_tags
db.image.belongsToMany(db.tags, {
    through: "images_tags",
    foreignKey: "imageId",
    otherKey: "tagId"
});
db.tags.belongsToMany(db.image, {
    through: "images_tags",
    foreignKey: "tagId",
    otherKey: "imageId"
});

//don't understand this line
db.ROLES = ["user", "admin"];
module.exports = db; 