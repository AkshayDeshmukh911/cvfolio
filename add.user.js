const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbconfig = {
    host: "localhost",
    user: "root",
    password: "pass#ak47@123",
    database: "exam",
};

const addUser = async(input) => {
    const connection = mysql.createConnection(dbconfig);

    await connection.connectAsync();

    const sql =
        "INSERT INTO Author (USERNAME, EMAIL, PASSWORD, MOBILE) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [
        input.username,
        input.email,
        input.password,
        input.mobile,
    ]);

    await connection.endAsync();
};

module.exports = { addUser };