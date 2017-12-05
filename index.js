var express = require('express');
var config = require('./config/index');
var model = require('./modelos');
var sequelize = model.sequelize;
var SensorDados = model['sensor_dados'];
var app = express();
app.use(express.static('public'));
var bodyParser = require('body-parser');
var moment = require("moment")
app.use(bodyParser.json())


sequelize.sync({force:false}).then(() => {
    console.log("BANCO SINCRONIZADO");
})
app.post('/api/dados',gravaDados);
app.get('/api/dados',getDados);

function gravaDados(request,response){
    console.log(request);
    let data = {
        valor: request.body.valor,
        data_criacao:moment(),
    }
    
    return SensorDados.create(request.body).then((sucess) => {
        return response.status(200).json(sucess)
    }).catch((error) =>{
        return response.status(400).send()
    })
}
function getDados(request,response){
    let pagina = 0;
    let offset = (1 - pagina)  * 30;
    return SensorDados.sum('valor').then((valor)=>{
        var kw = (valor * 127) / 1000;
        var resposta = { 
            total_waltz : kw.toFixed(2),
            custo : (kw * 0.03).toFixed(2),
        }
        return SensorDados.findAll({
            order:[["id","desc"]],
            limit:30,
        }).then((dados) => {
             resposta.dados = dados;
            response.status(200).json(resposta);
        }) 
    })

}

app.listen(3000);
