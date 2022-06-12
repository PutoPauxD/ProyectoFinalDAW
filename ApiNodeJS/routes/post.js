const routing = require("express").Router();
const conexion = require("../config/conexion");

//Devolver todos los posts.
routing.get("/post/", async (req,res) => {
    const sql = "select * from post"
    const rows = await conexion.query(sql);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows, null, 4));
})

//Devolver un post concreto.
routing.get("/post/:id", async (req, res) => {
    const {id} = req.params;
    const sql = "select * from post where id_post = ?";
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows, null, 4));
})

//Devolver un post de un usuario concreto.
routing.get("/post/:id/all", async (req, res) => {
    const {id} = req.params;
    const sql = "select * from post where id_user = ?";
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows, null, 4));
})

//Generar un post.
routing.post("/post/", async (req, res) => {
    const {text} = req.body;
    const {id_user} = req.body;
    const {hasMedia} = req.body;
    const {media} = req.body;
    const sql = `insert into post(id_user, text, hasMedia, media) values (${id_user}, "${text}", ${hasMedia}, "${media}")`;
    await conexion.query(sql);
    const getsql = `select * from post where id_user = ${id_user} AND text = ${text}`
    const rows = await conexion.query(getsql);
    res.status(200).send(JSON.stringify(rows));
    console.log(JSON.stringify(rows));
})

//Borrar un post.
routing.delete("/post/:id", async (req, res) => {
    const {id} = req.params;
    const sql = `delete from post where id_post = "${id}"`
    await conexion.query(sql, [id]);
    res.status(200).send();
})

//Modificar un post.
routing.put("/post/:id", async (req, res) => {
    const {id} = req.params;
    const {text} = req.body;
    const sql = `update post set text = "${text}" where id_post = ${id}`
    await conexion.query(sql, [id]);
    res.status(200).send();
})


module.exports = routing;
