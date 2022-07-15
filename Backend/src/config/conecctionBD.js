/*const mysql = require('mysql');
const conecta = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'fernando321',
    port: '3306',
    database: 'prueba'
});
conecta.connect();
module.exports = conecta;
*/
const sql = require('mssql')
const config = {
    user: '4geekinguser',
    password: 'g3KYQCEts$1555',
    server: '4geeking.com', // You can use 'localhost\\instance' to connect to named instance
    database: 'penvios',
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
};
sql.connect(config);

module.exports = sql;






































