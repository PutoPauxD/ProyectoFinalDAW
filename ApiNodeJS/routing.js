const routing = require('express').Router();
const conexion = require('./config/conexion');

/***************************/
/***************************/
/******* RUTAS POSTS *******/
/***************************/
/***************************/

//Devolver todos los posts.
routing.get('/post/', async (req,res) => {
    const sql = 'select * from post'
    const rows = await conexion.query(sql);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(rows, null, 4));
})

//Devolver un post concreto.
routing.get('/post/:id', async (req, res) => {
    const {id} = req.params;
    const sql = 'select * from post where id = ?';
    const rows = await conexion.query(sql, [id]);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(rows, null, 4));
})

//Generar un post.
routing.post('/post/', async (req, res) => {
    const {text} = req.body;
    const {id_user} = req.query;
    const sql = `insert into post(id_user, text) values (${id_user}, '${text}')`;
    await conexion.query(sql);
    res.status(200).send();
})

//Borrar un post.
routing.delete('/post/:id', async (req, res) => {
    const {id} = req.params;
    const sql = `delete from post where id = '${id}'`
    await conexion.query(sql, [id]);
    res.status(200).send();
})

//Modificar un post.
routing.put('/post/:id', async (req, res) => {
    const {id} = req.params;
    const {text} = req.body;
    const sql = `update post set text = '${text}' where id = ${id}`
    await conexion.query(sql, [id]);
    res.status(200).send();
})

/***************************/
/***************************/
/******* RUTAS USERS *******/
/***************************/
/***************************/

//Devolver todos los usuarios.
routing.get('/users/', async (req,res) => {
    const sql = 'select * from users'
    const rows = await conexion.query(sql);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(rows, null, 4));
})

//Devolver un usuario concreto.
routing.get('/users/:id', async (req, res) => {
    const {id} = req.params;
    const sql = 'select * from users where id = ?';
    const rows = await conexion.query(sql, [id]);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(rows, null, 4));
})

//Añadir un usuario.
routing.post('/users/', async (req, res) => {
    const {email, username, name, password, profpicture} = req.body;
    const sql = `insert into users(email, username, name, password, profpicture) values ('${email}', '${username}', '${name}', '${password}', '${profpicture}')`;
    await conexion.query(sql);
    res.status(200).send();
})

//Borrar un usuario.
routing.delete('/users/:id', async (req, res) => {
    const {id} = req.params;
    const sql = `delete from users where id = '${id}`;
    await conexion.query(sql, [id]);
    res.status(200).send();
})

//Modificar un usuario
routing.put('/users/:id', async (req, res) => {
    const {id} = req.params;
    const {email, username, name, password, profpicture} = req.body;
    const sql = `update users set email = '${email}', username = '${username}', name = '${name}', password = '${password}', profpicture = '${profpicture}' where id = ${id}`
    await conexion.query(sql, [id]);
    res.status(200).send();
})

module.exports = routing;