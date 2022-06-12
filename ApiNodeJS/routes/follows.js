const routing = require("express").Router();
const conexion = require("../config/conexion");


//Devolver los ids de los usuarios a los que sigues.
routing.get("/follow/:id", async (req, res) => {
    const id = req.params.id
    const sql = `select * from follows where following = ?`;
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(rows, null, 4);
}); 

//Generar un follow.
routing.post("/follow", async (req, res) => {
    const {loggedUserId, id} = req.body;
    const sql = `insert into follows(following, followed) values (${loggedUserId}, ${id})`;
    await conexion.query(sql);
    res.status(200).send();
}); 

//Borrar un follow.
routing.delete("/follow/:loggedUserId/:id", async (req, res) => {
    const {loggedUserId, id} = req.params;
    const sql = `delete from follows where following = ${loggedUserId} AND followed = ${id}`;
    await conexion.query(sql);
    res.status(200).send();
}); 

//Comprobar si se sigue
routing.get("/follow/follows/:id/:loggedUserId", async (req, res) => {
    const id = req.params.id;
    const loggedUserId = req.params.loggedUserId;
    const sql = "select * from follows where following = ? AND followed = ?";
    const rows = await conexion.query(sql, [loggedUserId, id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows[0], null, 4));
});

//Generar el numero de followers
routing.get("/follow/followers/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(following) as s FROM follows WHERE followed = ${id};`;
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(Number(rows[0].s, null, 4)));
});

//Generar el numero de followers
routing.get("/follow/following/:id", async (req, res) => {
    const id = req.params.id;
    const sql = `SELECT COUNT(followed) as s from follows WHERE following = ${id}`;
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(Number(rows[0].s, null, 4)));
});


module.exports = routing;
