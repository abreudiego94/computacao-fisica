var express = require('express');
var config = require('./config/index');
var model = require('./modelos');
var sequelize = model.sequelize;
var app = express();



app.post('/api/dados',gravaDados)

function gravaDados(request,response){
    console.log(request);
}
function getDados(request,response){

}

app.listen(3000);
