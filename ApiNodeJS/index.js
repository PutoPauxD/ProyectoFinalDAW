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
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


//Declaracion cabeceras CORS
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.set('port', port);
app.use('/api', require('./routes/routing'));
app.use('/api', require('./routes/home'));
app.use('/api', require('./routes/user'));
app.use('/api', require('./routes/post'));
app.use('/api', require('./routes/activity'));
app.use('/api', require('./routes/chats'));
app.use('/api', require('./routes/follows'));

//Llamada a la App por puerto
app.listen(app.get('port'), (err)=>{ err ? console.log('Ha sucedido un error iniciando el servidor', err) : console.log('Servidor iniciado en el puerto', port) });