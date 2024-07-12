const express = require("express");
const router = express.Router();
const connection = require("../db/database");
const app=express();
app.set("view engine","ejs");

router.get("/", (request, response) => {
  connection.query("SELECT * FROM users", (err, success) => {
    if (err) {
      response.send({ err: err.sqlMessage });
    } else {
      response.status(200).render("home",{success});
      
    }
  });
});

module.exports = router;
