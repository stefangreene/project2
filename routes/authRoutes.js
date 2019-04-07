module.exports = function(app, passport) {
  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/signin", function(req, res) {
    res.render("index");
  });

  app.post(
    "/signup",
    passport.authenticate(`local-signup`, {
      successRedirect: `/admin`,
      failurRedirect: `/signup`
    })
  );

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/admin",
      failureRedirect: "/signin"
    })
  );
    
  app.get("/api/profile", isLoggedIn, function(req, res) {
    res.json(req.user);
  });

  app.get("/profile", isLoggedIn, function(req, res) {
    res.render("profile");
  });

  app.get("/logout", function(req, res) {
    req.session.destroy(function(err) {
      res.redirect("/");
    });
  });

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect("/signin");
  }
};