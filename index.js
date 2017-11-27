var express = require('express');
var config = require('./config/index');
var model = require('./modelos');
var sequelize = model.sequelize;
var SensorDados = model['sensor_dados'];
var app = express();
app.use(express.static('public'));
console.log(model);

sequelize.sync({force:true}).then(() => {
    console.log("BANCO SINCRONIZADO");
})
app.post('/api/dados',gravaDados)

function gravaDados(request,response){
    return SensorDados.create(request.body).then((sucess) => {
        return response.status(200).json(sucess)
    }).catch((error) =>{
        return response.status(400).send()
    })
}
function getDados(request,response){

}

app.listen(3000);
