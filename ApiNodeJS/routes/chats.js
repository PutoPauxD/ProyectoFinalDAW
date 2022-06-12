const routing = require("express").Router();
const conexion = require("../config/conexion");

routing.post("/mensajes/", async (req, res) => {
    const id_envia = req.body.id_envia;
    const id_recibe = req.body.id_recibe;
    const mensaje = req.body.mensaje;
    const sql = `insert into mensajes(id_envia, id_recibe, mensaje) values (${id_envia}, ${id_recibe}, "${mensaje}")`;
    await conexion.query(sql);
    res.status(200).send();
})

routing.post("/mensajes/chats", async (req, res) => {
    const id_envia = req.body.id_envia;
    const id_recibe = req.body.id_recibe;
    const sql = `insert into chats(id_envia, id_recibe) values (${id_envia}, ${id_recibe})`;
    await conexion.query(sql);
    res.status(200).send();
})

routing.get("/mensajes/:id/chats", async (req, res) => {
    const id_envia = req.params.id;
    const sql = `select * from chats where id_envia = ?`;
    const rows = await conexion.query(sql, [id_envia] );
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows, null, 4));
})

routing.get("/mensajes/:id_envia/:id_recibe", async (req, res) => {
    const id_envia = req.params.id_envia;
    const id_recibe = req.params.id_recibe;
    const sql = `select * from mensajes where (id_envia = ${id_envia} AND id_recibe = ${id_recibe}) OR (id_recibe = ${id_envia} AND id_recibe = ${id_envia})`
    const rows = await conexion.query(sql, [id_envia], [id_recibe]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(rows, null, 4);
})


module.exports = routing;
