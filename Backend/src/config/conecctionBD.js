const sql = require('mssql')
const config = {
    user: 'userserver',
    password: 'passwordserver',
    server: 'put a server', // You can use 'localhost\\instance' to connect to named instance
    database: 'databasename',
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
};
sql.connect(config);

module.exports = sql;






































