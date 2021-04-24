const { Model, DataTypes } = require('sequelize');
class Period extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: DataTypes.NOW,
        allowNull: false,
        
      }
    }, { sequelize })
  };

  static associate(models) { };
};

module.exports = Period;