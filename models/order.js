module.exports = function(sequelize, Sequelize) {
  var order = sequelize.define("order", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    name: {
      type: Sequelize.STRING
    },

    quantity: {
      type: Sequelize.INTEGER
    },

    unitPrice: {
      type: Sequelize.STRING
    },

    totalPrice: {
      type: Sequelize.INTEGER
    },

    wineId: {
      type: Sequelize.STRING
    },

    customerId: {
      type: Sequelize.INTEGER
    },
    seller: {
      type: Sequelize.INTEGER,
      allowNull: false
    },

    status: {
      type: Sequelize.ENUM("open", "shipped"),
      defaultValue: "open"
    }
  });

  return order;
};
