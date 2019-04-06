module.exports = function(app, passport) {
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });
  app.get("/signin", function(req, res) {
    res.render("signin");
  });

  app.post(
    `/signup`,
    passport.authenticate(`local-signup`, {
      successRedirect: `/dashboard`,
      failurRedirect: `/signup`
    })
  );

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",
      failureRedirect: "/signin"
    })
  );
    
  app.get("/dashboard", isLoggedIn, authController.dashboard);

  app.get("/logout", authController.logout);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/signin");
  }
};