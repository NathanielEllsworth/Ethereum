var connection = require("./controllers/controller.js");
var express = require("express");
var bodyParser = require("body-parser");
var moment = require('moment');
var app = express();
var exphbs = require("express-handlebars");
var port = 3000;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var mysql = require("mysql");

moment().format("dddd, MMMM YYYY");




//page 1
app.get("/", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp ORDER BY `timestamp` LIMIT 38", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});


//page 2
app.get("/page2", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 38", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});


//page3
app.get("/page3", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 76", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});

//page 4
app.get("/page4", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 114", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});


//page 5
app.get("/page5", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 152", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});



//page 6
app.get("/page6", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 190", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});



//page 7
app.get("/page7", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 228", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});



//page 8
app.get("/page8", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 266", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});



//page 9
app.get("/page9", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 304", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});



//page 10
app.get("/page10", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 342", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});



//page 11
app.get("/page11", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 380", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});



//page 12
app.get("/page12", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 418", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});

//page 13
app.get("/page13", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 456", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});


//page 14
app.get("/page14", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 494", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});


//page 15
app.get("/page15", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 532", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});

//page 16
app.get("/page16", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 570", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});


//page 17
app.get("/page17", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 608", function(err, data) {
        if (err) {
            throw err;
        }
        //console.log(data)
        //var ts = Date.now()
        moment({enterprice: data.timestamp}).format("dddd, MMMM YYYY");
        res.render("index", {etherprice: data});

    });
});

//page 18
app.get("/page18", function(req, res) {
    connection.query("SELECT etherprice.`price_USD`, `marketcap_value`.`market-cap-value`, transactions.transactions, marketcap_value.timestamp FROM `marketcap_value` INNER JOIN etherprice, transactions WHERE etherprice.timestamp = `marketcap_value`.timestamp AND marketcap_value.timestamp = transactions.timestamp order by `timestamp` LIMIT 38 offset 646", function(err, data) {
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


