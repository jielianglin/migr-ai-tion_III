const mySecret = process.env['SECRET_KEY']
require('dotenv').config(); 

module.exports = {
    HOST: process.env.host,
    USER: process.env.user,
    PASSWORD: process.env.dbPassword,
    DB: process.env.db,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}; 


