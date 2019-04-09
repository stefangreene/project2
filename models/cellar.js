module.exports = function(sequelize, Sequelize) {
  var cellar = sequelize.define("wine", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    wineName: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    variety: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    vintage: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },

    type: {
      type: Sequelize.ENUM,
      values: ["red", "white", "rose", "dessert", "sparkling"],
      notEmpty: true
    },

    countryOrigin: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    Price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    seller: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  });

  return cellar;
};
