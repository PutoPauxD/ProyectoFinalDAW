const routing = require("express").Router();
const conexion = require("../config/conexion");

//Devolver todos los usuarios.
routing.get("/users/", async (req,res) => {
    const sql = "select * from users"
    const rows = await conexion.query(sql);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows, null, 4));
})

//RightBar.
routing.get("/users/tofollow/:id", async (req,res) => {
    const {id} = req.params;
    const sql = `SELECT * from users WHERE id NOT IN (SELECT followed FROM follows where following = ?) AND id != ${id}`
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows.slice(0, 5), null, 4));
})

//Devolver un usuario concreto.
routing.get("/users/:id", async (req, res) => {
    const {id} = req.params;
    const sql = "select * from users where id = ?";
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows[0], null, 4));
})

//Devolver un usuario concreto.
routing.get("/users/numPost/:id", async (req, res) => {
    const id = req.params.id;
    const sql = "Select Count(p.id_post) as p from post p WHERE p.id_user = ?";
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(Number(rows[0].p), null, 4));
})

//Borrar un usuario.
routing.delete("/users/:id", async (req, res) => {
    const {id} = req.params;
    const sql = `delete from users where id = "${id}`;
    await conexion.query(sql, [id]);
    res.status(200).send();
})

//Modificar un usuario
routing.put("/users/:id", async (req, res) => {
    const {id} = req.params;
    const {email, username, name, password, profpicture, descripcion, seguidos, seguidores, numeroPosts, diaUnion, cumpleanios, headerpicture} = req.body;
    
    const sql = `update users set email = "${email}",
                                  username = "${username}", 
                                  name = "${name}", 
                                  password = "${password}", 
                                  profpicture = "${profpicture}", 
                                  descripcion = "${descripcion}", 
                                  seguidos = ${seguidos}, 
                                  seguidores = ${seguidores}, 
                                  numeroPosts = ${numeroPosts}, 
                                  diaUnion = "${diaUnion}", 
                                  cumpleanios = "${cumpleanios}", 
                                  headerpicture = "${headerpicture}"
                                  where id = ${id}`;
    await conexion.query(sql, [id]);
    res.status(200).send();
})

module.exports = routing;
