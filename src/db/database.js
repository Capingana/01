const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  database: "blog",
  password: "",
  user: "root",
});

module.exports=connection;

