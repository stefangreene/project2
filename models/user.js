module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("user", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    firstname: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    lastname: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    username: {
      type: Sequelize.TEXT
    },

    sellerID: {
      type: Sequelize.STRING
    },

    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },

    address: {
      type: Sequelize.STRING,
      allowNull: true
    },

    postal: {
      type: Sequelize.INTEGER
    },

    country: {
      type: Sequelize.STRING
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false
    },

    lastLogin: {
      type: Sequelize.DATE
    },
    userToken: {
      type: Sequelize.TEXT
    },

    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  return User;
};
