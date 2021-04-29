const { Model, DataTypes } = require('sequelize');
class Period extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, { sequelize })
  };

  static associate(models) { };
};

module.exports = Period;