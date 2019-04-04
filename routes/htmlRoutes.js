var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Load admin dashboard page
  app.get("/admin", function(req, res) {
      res.render("dashboard");
   /* db.Example.findAll({}).then(function(dbExamples) {
      res.render("admin-dashboard", {
        msg: "admin-dashboard.handlebars ",
        examples: dbExamples
      });
    });*/
  });

  app.get("/orders", function(req, res) {
    res.render("orders");
    /*db.Example.findAll({}).then(function(dbExamples) {
      res.render("orders-dashboard", {
        msg: "orders.handlebars ",
        examples: dbExamples
      });
    });*/
  });

  app.get("/inventory", function(req, res) {
    res.render("inventory");
    /*db.Example.findAll({}).then(function(dbExamples) {
      res.render("orders-dashboard", {
        msg: "orders.handlebars ",
        examples: dbExamples
      });
    });*/
  });

  app.get("/accounts", function(req, res) {
    res.render("accounts");
    /*db.Example.findAll({}).then(function(dbExamples) {
      res.render("orders-dashboard", {
        msg: "orders.handlebars ",
        examples: dbExamples
      });
    });*/
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
