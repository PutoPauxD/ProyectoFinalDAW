require ('./config/conexion');
const express = require('express');

//Declaracion del puerto a usar y la App express.
const port = (process.env.port || 3000);
const app = express();

//Definicion de puerto, ruta y permiso para datos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Declaracion cabeceras CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.set('port', port);
app.use('/api', require('./routing'));

//Llamada a la App por puerto
app.listen(app.get('port'), (err)=>{ err ? console.log('Ha sucedido un error iniciando el servidor', err) : console.log('Servidor iniciado en el puerto', port) });