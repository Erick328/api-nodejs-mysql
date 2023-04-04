const sql = require('promise-mysql');
const config = require('./../config');


/* const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

*/
const connection = sql.createConnection({
    host: 'localhost' || "",
    user: 'root' || "",
    password: '' || "",
    database: 'apirest' || "",
});
const getConnection = () => {
    return connection;
};

module.exports = {
    getConnection
}