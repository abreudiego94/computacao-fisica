module.exports = function  (sequelize,DataTypes) {
    const modelo = sequelize.define('sensor_dados', {
        valor: DataTypes.DOUBLE,
        data_local: DataTypes.DATE,
        data_criacao:DataTypes.DATE
      });

    return modelo
      
}