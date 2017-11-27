module.exports = function  (sequelize,DataTypes) {
    const modelo = sequelize.define('sensor_dados', {
        valor: DataTypes.REAL(8,3),
        data_local: DataTypes.REAL(8,3),
        data_criacao:DataTypes.REAL(8,3)
      });

    return modelo
      
}