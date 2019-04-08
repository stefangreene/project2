var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("1index");
  });

  app.get("/signup", function(req, res) {
    res.render("2signup");
  });

  // Load admin dashboard page
  app.get("/admin", isLoggedIn, function(req, res) {
    res.render("3dashboard");
  });

  app.get("/mycellar", isLoggedIn, function(req, res) {
    res.render("4mycellar");
  });

  app.get("/contacts", isLoggedIn,  function(req, res) {
    res.render("5contacts");
  });

  app.get("/orders", isLoggedIn, function(req, res) {
    res.render("6orders");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("error");
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/signin");
  }
};
