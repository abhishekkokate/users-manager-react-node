const mysql = require("mysql2");

const DB_URL = process.env.DB_URL;

const pool = mysql.createPool(DB_URL);

// Just for testing the connection
pool.getConnection((err, connection) => {
    if (err) {
        console.error("DB Connection Failed: ", err.message);
        return;
    }
    console.log("DB Connection Done.");
    return connection.release();
});

const query = (sql, params) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, params, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
};

module.exports = {
    query,
};
