const routing = require("express").Router();
const conexion = require("../config/conexion");

/***************************/
/***************************/
/********** LOGIN **********/
/***************************/
/***************************/

routing.get("/authuser/:password/:email", async (req, res) => {
    const {password} = req.params;
    const {email} = req.params;
    const sql = `select * from users where password = ? and email = ?`;
    const rows = await conexion.query(sql, [password, email] );
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows[0], null, 4));
});

//Añadir un usuario.
routing.post("/authuser/", async (req, res) => {
    const {email, username, name, password} = req.body;
    const sql = `insert into users(email, username, name, password) values ("${email}", "${username}", "${name}", "${password}")`;
    await conexion.query(sql);
    res.status(200).send();
}); 

/***************************/
/***************************/
/******** BUSQUEDA *********/
/***************************/
/***************************/

routing.get("/search/:username", async (req, res) => {
    const username = req.params.username + '%';
    const sql = `select username, name, profpicture, id from users where name like ?`
    const rows = await conexion.query(sql, [username]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(rows, null, 4);
})

/***************************/
/***************************/
/****** NOTIFICATION *******/
/***************************/
/***************************/

//Devuelve las notificaciones
routing.get("/notification/:id", async (req, res) => {
    const user_id = req.params.id;
    const sql = `SELECT u.name, u.profpicture, p.text, pa.type FROM post p, users u, postactivity pa WHERE p.id_user = u.id AND p.id_post = pa.post_id AND pa.user_id = ? ORDER BY p.id_post DESC`;
    const rows = await conexion.query(sql, [user_id]);
    res.status(200).send(JSON.stringify(rows, null, 4));
});

module.exports = routing;
