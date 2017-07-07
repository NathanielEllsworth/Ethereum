var express = require("express");
var bodyParser = require("body-parser");
var moment = require('moment');



var app = express();
var port = 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var mysql = require("mysql");

moment().format("dddd, MMMM YYYY");



var connection = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password: "",
    database: "Ethereum"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);

});

app.get("/", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp ORDER BY `timestamp` LIMIT 10", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});

app.get("/page2", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 10 offset 10", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});

app.post("/", function(req, res) {
    connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan],
        function(err, result) {
            if (err) {
                throw err;
            }
            //TODO what do we do?
            res.redirect('/');
        });
});

app.post("/delete/", function(req, res) {
    connection.query("DELETE FROM plans WHERE id = ?", [req.body.id],
        function(err, result) {
            if (err) {
                throw err;
            }


            //TODO what do we do?
            res.redirect('/');
        });
});

app.post("/update", function(req, res) {

    connection.query("UPDATE plans SET plan = ? WHERE id = ?",
        [req.body.plan, req.body.id], function(err, result) {
            if (err) {
                throw err;
            }

            res.redirect('/');
            //TODO what do we do?
        });
});

app.listen(port);


// var express = require("express");
// var bodyParser = require("body-parser");
//
// var app = express();
// var port =3000;
//
// var mysql = require("mysql");
//
// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "Ethereum"
//
// });
//
// connection.connect(function (err) {
//     if (err){
//         console.log(error)
//     }
//
//
// });
//
//
// app.use(express.static())




// /**
//  *  this is the data string needed to create the table of the needed data
//  */
//
// // SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp;
//
//
// /**
//  * Look at 08 task-saver 'server.js'
//  */
//
//
//
//
//
// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     app.listen(port, function  (){
//         console.log('Server listening on port %d', port);
//     });
//     console.log("connected as id " + connection.threadId);
// });
//
// // Root get route
// app.get("/", function(req, res) {
//     connection.query("SELECT * FROM tasks;", function(err, data) {
//         if (err) throw err;
//
//         // Test it
//         console.log('The solution is: ', data);
//
//         // Test it
//         //  res.send(data);
//
//         //Now - how do you send the index handlebars template?
//         res.render('index', {tasks: data});  //*****************************
//         //    How do you pass the tasks to it?
//     });
// });
//
// // Post route -> back to home
// app.post("/", function(req, res) {
//     // Test it
//     // console.log('You sent, ' + req.body.task);
//
//     // Test it
//     // res.send('You sent, ' + req.body.task);
//
//     connection.query("INSERT INTO tasks (task) VALUES (?)", [req.body.task], function(err, result) {
//         if (err) throw err;
//
//         //What do we always do after a POST?
//         res.redirect('/') //*****************************
//     });
// });
