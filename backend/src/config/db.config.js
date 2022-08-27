const mySecret = process.env['SECRET_KEY']

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: {mySecret},
    DB: "testdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}; 

