// Require our dependencies
var express = require("express");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

// Set up our port to be either the host's designated port, or 3000
var PORT = process.env.PORT || 3000;

// Instantiate our Express App
var app = express();

// Require our routes
var routes = require("./routes");

// Designate our public folder as a static directory
app.use(express.static("public"));

// Connect Handlebars to our Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use bodyParser in our app
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Have every request go through our route middleware
app.use(routes);

var MONGODB_URI = "mongodb://heroku_34xqwwfh:2t46te52oeve8kpc81f9lfms9k@ds129966.mlab.com:29966/heroku_34xqwwfh";

mongoose.Promise = Promise;
var mongoDB = process.env.MONGODB_URI || "mongodb://localhost/newScraper";
mongoose.connect(mongoDB, function(error) {
    if (error) throw error;
    useMongoClient: true;
    console.log("Mongoose connection is successful!!")

});

// Listen on the port
app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});











// var express = require("express");
// var bodyParser = require("body-parser");
// var logger = require("morgan");
// var mongoose = require("mongoose");

// var exphbs = require("express-handlebars");


// var axios = require("axios");
// var cheerio = require("cheerio");


// var db = require("./models");

// var PORT = 3000;


// var app = express();
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");



// app.use(logger("dev"));

// // Use body-parser for handling form submissions
// app.use(bodyParser.urlencoded({ extended: false }));

// // Use express.static to serve the public folder as a static directory
// app.use(express.static("public"));

// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");


// // var MONGODB_URI = "mongodb://heroku_34xqwwfh:2t46te52oeve8kpc81f9lfms9k@ds129966.mlab.com:29966/heroku_34xqwwfh";

// mongoose.Promise = Promise;
// var mongoDB = process.env.MONGODB_URI || "mongodb://localhost/newScraper";
// mongoose.connect(mongoDB, function(error) {
//     if (error) throw error;
//     useMongoClient: true;
//     console.log("Mongoose connection is successful!!")

// });


// // Routes

// //A GET route for getting all initial articles
// app.get('/', function(req, res) {

//     console.log("hitting app.get at root");
//     res.render("index")
// });

// // A GET route for scraping the echojs website
// app.get("/scrape", function(req, res) {
//   // First, we grab the body of the html with request
//   axios.get("http://www.echojs.com/").then(function(response) {
//     // Then, we load that into cheerio and save it to $ for a shorthand selector
//     var $ = cheerio.load(response.data);

//     // Now, we grab every h2 within an article tag, and do the following:
//     $("article h2").each(function(i, element) {
//       // Save an empty result object
//       var result = {};

//       // Add the text and href of every link, and save them as properties of the result object
//       result.title = $(this)
//         .children("a")
//         .text();
//       result.link = $(this)
//         .children("a")
//         .attr("href");

//       // Create a new Article using the `result` object built from scraping
//       db.Article
//         .create(result)
//         .then(function(dbArticle) {
//           // If we were able to successfully scrape and save an Article, send a message to the client
//           return res.render("index", { scrapedArticles: dbArticle });



//         })
//         .catch(function(err) {
//           // If an error occurred, send it to the client
//           res.json(err);
//         });
//     });
//   });
// });

// // Route for getting all Articles from the db
// app.get("/articles", function(req, res) {
//   // Grab every document in the Articles collection
//   db.Article
//     .find({})
//     .then(function(dbArticle) {
//       // If we were able to successfully find Articles, send them back to the client
//       res.json(dbArticle);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });

// // Route for grabbing a specific Article by id, populate it with it's note
// app.get("/articles/:id", function(req, res) {
//   // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
//   db.Article
//     .findOne({ _id: req.params.id })
//     // ..and populate all of the notes associated with it
//     .populate("note")
//     .then(function(dbArticle) {
//       // If we were able to successfully find an Article with the given id, send it back to the client
//       res.json(dbArticle);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });

// // Route for saving/updating an Article's associated Note
// app.post("/articles/:id", function(req, res) {
//   // Create a new note and pass the req.body to the entry
//   db.Note
//     .create(req.body)
//     .then(function(dbNote) {
//       // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
//       // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//       // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//       return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
//     })
//     .then(function(dbArticle) {
//       // If we were able to successfully update an Article, send it back to the client
//       res.json(dbArticle);
//     })
//     .catch(function(err) {
//       // If an error occurred, send it to the client
//       res.json(err);
//     });
// });

// // Start the server
// app.listen(PORT, function() {
//   console.log("App running on port " + PORT + "!");
// });



















// // var express = require("express");
// // var bodyParser = require("body-parser");
// // var logger = require("morgan");
// // var mongoose = require("mongoose");

// // var exphbs = require("express-handlebars");


// // var axios = require("axios");
// // var cheerio = require("cheerio");


// // var db = require("./models");

// // var PORT = 3000;


// // var app = express();
// // app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// // app.set("view engine", "handlebars");



// // app.use(logger("dev"));

// // // Use body-parser for handling form submissions
// // app.use(bodyParser.urlencoded({ extended: false }));

// // // Use express.static to serve the public folder as a static directory
// // app.use(express.static("public"));

// // var exphbs = require("express-handlebars");

// // app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// // app.set("view engine", "handlebars");


// // // var MONGODB_URI = "mongodb://heroku_34xqwwfh:2t46te52oeve8kpc81f9lfms9k@ds129966.mlab.com:29966/heroku_34xqwwfh";

// // mongoose.Promise = Promise;
// // var mongoDB = process.env.MONGODB_URI || "mongodb://localhost/newScraper";
// // mongoose.connect(mongoDB, function(error) {
// //     if (error) throw error;
// //     useMongoClient: true;
// //     console.log("Mongoose connection is successful!!")

// // });



// // // ========================================== ROUTES ============================



// // //THIS IS THE INITAL GET ROUTE FOR RENDERING ALL ARTICLES ON THE PAGE
// // app.get('/', function(req, res) {

// //     console.log("hitting app.get at root");
// //     res.redirect("/articles");
// //     // res.render("index")
// // });



// // // A GET SCRAPING THE ONION WEBSITE
// // app.get("/scrape", function(req, res) {

// //     console.log("Scraped website");

// //     // First, we grab the body of the html with request
// //     axios.get("http://www.theonion.com/").then(function(response) {
// //         // Then, we load that into cheerio and save it to $ for a shorthand selector
// //         var $ = cheerio.load(response.data);

// //         // Now, we grab every h2 within an article tag, and do the following:
// //         $("div.headline--wrapper").each(function(i, element) {
// //             // Save an empty result object
// //             var result = {};

// //             // Add the text and href of every link, and save them as properties of the result object
// //             result.title = $(this)
// //                 .text();
// //             result.link = $(this)
// //                 .children("a")
// //                 .attr("href");

// //             db.Article
// //                 .create(result)
// //                 .then(function(dbArticle) {
// //                     // If we were able to successfully scrape and save an Article, send a message to the client
// //                     return res.render("index", { scrapedArticles: dbArticle });
// //                 })
// //                 .catch(function(err) {
// //                     // If an error occurred, send it to the client
// //                     res.json(err);
// //                 })

// //         });
// //     });
// // });


// // //ROUTE FOR GETTING ALL ARTICLES AND DISPLAYING ON PAGE
// // app.get("/articles", function(req, res) {

// //     console.log("Hitting app.get /articles route");
// //     // Grab every document in the Articles collection
// //     db.Article
// //         .find({})
// //         .then(function(dbArticle) {
// //             // If we were able to successfully find Articles, send them back to the client
// //             res.render("index", { scrapedArticles: dbArticle });
// //         })
// //         .catch(function(err) {
// //             // If an error occurred, send it to the client
// //             res.json(err);
// //         });
// // });


// // //THIS IS THE ROUTE FOR GETTING THE ARTICLE BY ID AND RENDERING TO SAVED PAGE
// // app.get("/articles/:id", function(req, res) {
// //     console.log("Hit app.get /articles/:id route");
// //     // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
// //     db.Article
// //         .findOne({ _id: req.params.id })

// //         // ..and populate all of the notes associated with it
// //         .populate({ path: "savedArt", model: db.Article })
// //         // console.log("populated!");
// //         .then(function(dbArticle) {
// //             // If we were able to successfully find an Article with the given id, send it back to the client
// //             res.render("Saved", { savedArticle: dbArticle });
// //             // res.json(dbArticle);
// //             // res.redirect("/savedarticles")
// //             console.log("this is rendered")
// //         })
// //         .catch(function(err) {
// //             // If an error occurred, send it to the client
// //             res.json(err);
// //         });
// // });


// // // ROUTE FOR POSTING ID TO DATABASE
// // app.post("/articles/:id", function(req, res) {
// //     // Create a new note and pass the req.body to the entry
// //     db.Article
// //         .create(req.body)
// //         .then(function(dbSaved) {
// //             // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
// //             // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
// //             // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
// //             return db.Article.findOneAndUpdate({ "_id": req.params.id }, { "savedArt": true })
// //         })
// //         .then(function(dbArticle) {
// //             // If we were able to successfully update an Article, send it back to the client
// //             // res.json(dbArticle);
// //             res.render("Saved", { savedArticle: dbArticle });
// //         })
// //         .catch(function(err) {
// //             // If an error occurred, send it to the client
// //             res.json(err);
// //         });
// // });



// // //SAVED ARTICLE ROUTES-- PROB NOT NEEDED???
// // app.get('/savedarticles', function(req, res) {

// //     console.log("saved articles get route is working");
// //     db.Article
// //         .find({})
// //         .then(function(dbSavedArticle) {
// //             // If we were able to successfully find Articles, send them back to the client
// //             // res.render("Saved", {savedArticle: dbSavedArticle});
// //             res.render("Saved")
// //         })
// //         .catch(function(err) {
// //             // If an error occurred, send it to the client
// //             res.json(err);
// //         });
// // });

// // //SAVED ARTICLE ROUTES-- PROB NOT NEEDED???
// // app.post("/savedarticles", function(req, res) {
// //     // Create a new note and pass the req.body to the entry
// //     console.log("post is working yes yes")
// //     db.Saved
// //         .create(req.body)
// //     console.log(req.body)
// //         .then(function(dbSaved) {
// //             // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
// //             // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
// //             // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
// //             return db.Article.findOneAndUpdate({ _id: req.params.id }, { $push: { 'savedArt': db.Article._id } }, { Saved: dbSaved._id }, { new: true });
// //         })
// //         .then(function(dbArticle) {

// //             // If we were able to successfully update an Article, send it back to the client
// //             res.render("Saved", { savedArticle: dbArticle });
// //         })
// //         .catch(function(err) {
// //             // If an error occurred, send it to the client
// //             res.json(err);
// //         });
// // });




// // // Start the server
// // app.listen(PORT, function() {
// //     console.log("App running on port " + PORT + "!");
// // });