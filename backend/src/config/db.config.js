const mySecret = process.env['SECRET_KEY']
require('dotenv').config(); 

module.exports = {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: process.env.dbPassword,
    DB: "sys",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}; 


