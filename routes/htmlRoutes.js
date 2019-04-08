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
  app.get("/admin", function(req, res) {
    res.render("3dashboard");
  });

  app.get("/mycellar", function(req, res) {
    res.render("4mycellar");
  });

  app.get("/contacts", function(req, res) {
    res.render("5contacts");
  });

  app.get("/orders", function(req, res) {
    res.render("6orders");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("error");
  });
};
