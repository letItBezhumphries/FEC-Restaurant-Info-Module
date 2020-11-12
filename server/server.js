// const express = require('express');
// const morgan = require('morgan');
// const path = require('path');
// const app = express();
// const cors = require('cors');
// const port = process.env.PORT || 3001;

// app.use(morgan('dev'));
// app.use(cors());
// app.use(express.static(path.join(__dirname, '../public/dist')));

// app.listen(port, () => {
//   console.log(`server running at: http://localhost:${port}`);
// });

const express = require("express");
const http = require("http");
const createError = require("http-errors");
const path = require("path");
const mysql = require("mysql");
const errorHandler = require("errorhandler");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("dist"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const connection = mysql.createConnection({
  host: "localhost",
  user: "eric",
  password: "chalon",
  database: "restaurant_details",
});

connection.connect((err) => {
  if (err) throw err;
  else {
    const queryClear = "TRUNCATE TABLE restaurants";
    const queryCreate = `CREATE TABLE if not exists restaurants (
      ID VARCHAR(10) CHARACTER SET utf8,
      name VARCHAR(41) CHARACTER SET utf8,
      description VARCHAR(1768) CHARACTER SET utf8,
      menuOne VARCHAR(795) CHARACTER SET utf8,
      menuTwo VARCHAR(693) CHARACTER SET utf8,
      menuThree VARCHAR(1413) CHARACTER SET utf8,
      menuFour VARCHAR(626) CHARACTER SET utf8,
      menuFive VARCHAR(913) CHARACTER SET utf8,
      cross_street VARCHAR(19) CHARACTER SET utf8,
      neighborhood VARCHAR(17) CHARACTER SET utf8,
      hours VARCHAR(222) CHARACTER SET utf8,
      cuisine VARCHAR(30) CHARACTER SET utf8,
      style VARCHAR(14) CHARACTER SET utf8,
      dress VARCHAR(16) CHARACTER SET utf8,
      parking VARCHAR(299) CHARACTER SET utf8,
      transit VARCHAR(210) CHARACTER SET utf8,
      payment VARCHAR(65) CHARACTER SET utf8,
      chef VARCHAR(25) CHARACTER SET utf8,
      details VARCHAR(95) CHARACTER SET utf8,
      url VARCHAR(42) CHARACTER SET utf8,
      phone VARCHAR(14) CHARACTER SET utf8,
      parties VARCHAR(255) CHARACTER SET utf8,
      party_contact VARCHAR(33) CHARACTER SET utf8,
      special VARCHAR(229) CHARACTER SET utf8
      )`;
    const seedQuery =
      "INSERT INTO restaurants (id, name, description,  " +
      "menuOne, menuTwo, menuThree, menuFour, menuFive, cross_street, neighborhood, " +
      "hours, cuisine, style, dress, parking, transit, payment, chef, details, url, " +
      "phone, parties, party_contact, special) VALUES ?";
    connection.query(queryClear, (error, res) => {
      if (error) throw error;
      console.log("Table reset");
    });
    connection.query(queryCreate, (error, res) => {
      if (error) throw error;
      console.log("Table created");
    });
    connection.query(seedQuery, [db.data.restaurants], (error, results) => {
      if (error) throw error;
      console.log(`${results.affectedRows}rows seeded`);
    });
  }
  console.log("You are now connected...");
});

app.get("/wild", (req, res) => {
  const queryStr = "SELECT * FROM restaurants ORDER BY RAND() LIMIT 1";
  connection.query(queryStr, (error, results) => {
    res.json(results[0]);
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/client/index.html"));
});

app.set("view engine", "pug");

app.set("port", 3001);

if (app.get("env") === "development") {
  app.use(errorHandler());
}

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
  next();
});

const server = http.createServer(app);

server.listen(app.get("port"), () => {
  console.log(`Server running on ${app.get("port")}`);
});

module.exports = app;

