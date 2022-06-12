const routing = require("express").Router();
const conexion = require("../config/conexion");


routing.post("/activity", async (req, res) => {
    const {user_id, post_id, type} = req.body;
    const sql = `insert into postactivity(user_id, post_id, type) values ("${user_id}", "${post_id}", "${type}")`;
    await conexion.query(sql);
    res.status(200).send();
});

//Devuelve todos los posts con likes o Aulls de un usuario
routing.get("/activity/:id", async (req, res) => {
    const user_id = req.params.id;
    const sql = `select * from postactivity where user_id = ?`;
    const rows = await conexion.query(sql, [user_id]);
    res.status(200).send(JSON.stringify(rows, null, 4));
});

routing.delete("/activity/:id", async (req, res) => {
    const {id} = req.params;
    const {type} = req.body;
    const sql = `delete from postactivity where post_id = ? and type = "${type}"`
    await conexion.query(sql, [id]);
    res.status(200).send();
})

//Devolver shares en un post concreto.
routing.get("/activity/share/:id", async (req, res) => {
    const {id} = req.params;
    const sql = "select count(post_id) as shares from postactivity where post_id = ? and type = 1 ";
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(Number(rows[0].shares), null, 4));
})

//Devolver shares en un post concreto.
routing.get("/activity/likes/:id", async (req, res) => {
    const {id} = req.params;
    const sql = "select count(post_id) as shares from postactivity where post_id = ? and type = 0 ";
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(Number(rows[0].shares), null, 4));
})

//Comprobar si se ha dado mg
routing.get("/activity/isLiked/:id/:uid", async (req, res) => {
    const id = req.params.id;
    const uid = req.params.uid;
    const sql = "select * from postactivity where user_id = ? AND post_id = ? AND type = 0";
    const rows = await conexion.query(sql, [uid, id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows[0], null, 4));
});

//Comprobar si se ha dado share
routing.get("/activity/isShared/:id/:uid", async (req, res) => {
    const id = req.params.id;
    const uid = req.params.uid;
    const sql = "select * from postactivity where user_id = ? AND post_id = ? AND type = 1";
    const rows = await conexion.query(sql, [uid, id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows[0], null, 4));
});



module.exports = routing;
