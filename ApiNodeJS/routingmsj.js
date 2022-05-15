const routing = require('express').Router();
const conexion = require('./config/conexion');

/***************************/
/***************************/
/********** CHATS **********/
/***************************/
/***************************/
routing.get('/mensajes/:id/chats', async (req, res) => {
    const {id} = req.params;
    const sql = "select * from chats where id_envia = ?"
    const rows = await conexion.query(sql, [id]);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(rows, null, 4);
})

routing.get('/mensajes/:id/mensajes', async (req, res) => {
const {id} = req.params;
const {id_recibe} = req.body;
    const sql = `select * from mensajes where id_envia = ? AND id_recibe = ${id_recibe}`
    const rows = await conexion.query(sql, [id]);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(rows, null, 4);
})

module.exports = routing;