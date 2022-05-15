const routing = require("express").Router();
const conexion = require("./config/conexion");

/***************************/
/***************************/
/******* RUTAS POSTS *******/
/***************************/
/***************************/

//Datos para todos los posts
routing.get("/home", async(req, res) => {
    const sql = "SELECT u.username, u.id, u.name, p.id_post, p.text, u.profpicture  FROM users u INNER JOIN post p ON p.id_user = u.id ORDER BY p.id_post DESC"
    const rows = await conexion.query(sql);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows, null, 4));
});

//Datos para todos los posts de usuario concreto
routing.get("/home/:username", async(req, res) => {
    const {username} = req.params;
    const sql = `SELECT u.username, u.name, p.id_post, p.text, u.profpicture  FROM users u INNER JOIN post p ON p.id_user = u.id where u.username = "${username}" ORDER BY p.id_post DESC `
    const rows = await conexion.query(sql, [username]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows, null, 4));
});

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
    const sql = "select * from post where id = ?";
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
    const {id_user} = req.query;
    const sql = `insert into post(id_user, text) values (${id_user}, "${text}")`;
    await conexion.query(sql);
    res.status(200).send();
})

//Borrar un post.
routing.delete("/post/:id", async (req, res) => {
    const {id} = req.params;
    const sql = `delete from post where id = "${id}"`
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

/***************************/
/***************************/
/******* RUTAS USERS *******/
/***************************/
/***************************/

//Devolver todos los usuarios.
routing.get("/users/", async (req,res) => {
    const sql = "select * from users"
    const rows = await conexion.query(sql);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows, null, 4));
})

//Devolver un usuario concreto.
routing.get("/users/:id", async (req, res) => {
    const {id} = req.params;
    const sql = "select * from users where id = ?";
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows[0], null, 4));
})

//Añadir un usuario.
routing.post("/users/", async (req, res) => {
    const {email, username, name, password, profpicture} = req.body;
    const sql = `insert into users(email, username, name, password, profpicture) values ("${email}", "${username}", "${name}", "${password}", "${profpicture}")`;
    await conexion.query(sql);
    res.status(200).send();
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

/***************************/
/***************************/
/****** POST ACTIVITY ******/
/***************************/
/***************************/

routing.post("/activity", async (req, res) => {
    const {user_id, post_id, type} = req.body;
    const sql = `insert into postactivity(user_id, post_id, type) values ("${user_id}", "${post_id}", "${type}")`;
    await conexion.query(sql);
    res.status(200).send();
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
routing.get("/activity/isliked/:id", async (req, res) => {
    const {id} = req.params;
    const sql = "select * from postactivity where user_id = 1 AND post_id = ? AND type = 0";
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows[0], null, 4));
});


routing.get("/loguser/:password/:email", async (req, res) => {
    const {password} = req.params;
    const {email} = req.params;
    const sql = `select * from users where password = ? and email = ?`;
    const rows = await conexion.query(sql, [password, email] );
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows[0], null, 4));
});


routing.post("/reguser")

/***************************/
/***************************/
/********** CHATS **********/
/***************************/
/***************************/
routing.get("/mensajes/:id/chats", async (req, res) => {
    const {id} = req.params.user_id;
    const {id_envia} = req.params.id_recibe;
    console.log(id, id_envia)
    const sql = "select * from chats where id_envia = ?"
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(rows, null, 4);
})

routing.get("/mensajes/:id", async (req, res) => {
console.log(req.params)
const {id} = req.params;
const {id_envia} = req.params.id_recibe;
console.log(id, id_envia)
const sql = `select * from mensajes where id_envia = ? AND id_recibe = ?`
const rows = await conexion.query(sql, [id], [id_recibe]);
res.setHeader("Content-Type", "application/json");
res.status(200).send(rows, null, 4);
})

module.exports = routing;