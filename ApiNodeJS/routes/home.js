const routing = require("express").Router();
const conexion = require("../config/conexion");

//Datos para todos los posts
routing.get("/home/:id/:n", async(req, res) => {
    const id = req.params.id;
    const n = req.params.n;
    let num = (n-1) * 7;
    let final = (n*7) - 1;
    const sql = `SELECT u.username, u.id, u.name, u.profpicture, p.id_post, p.text, p.hasMedia, p.media FROM follows f, users u INNER JOIN post p ON p.id_user = u.id WHERE u.id = f.followed AND f.following = ${id} UNION SELECT u.username, u.id, u.name, u.profpicture, p.id_post, p.text, p.hasMedia, p.media FROM follows f, users u INNER JOIN post p ON p.id_user = u.id WHERE p.id_user = ${id} ORDER BY id_post DESC`
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    if(rows.length > num){
        if(rows.length > num) {
            if(rows.length > num + 5) {
                rows.forEach(post => {
                    console.log(post);
                });
                res.status(200).send(JSON.stringify(rows.slice(num, final), null, 4));
            } else {
                res.status(200).send(JSON.stringify(rows.slice(num, final), null, 4));
            }
        } else {
            res.status(200).send(JSON.stringify(rows.slice(num, num - (rows.length - 1) ), null, 4));
        }
    } else {
        res.status(200).send(JSON.stringify(rows, null, 4))
    }
});

// Datos para todos los posts de usuario concreto
routing.get("/home/profile/:username/:n", async(req, res) => {
    const username = req.params.username;
    const n = req.params.n;
    let num = (n-1) * 5;
    let final = (n*5) - 1;
    const sql = `SELECT u.username, u.name, p.id_post, p.text, u.profpicture, p.hasMedia, p.media FROM users u INNER JOIN post p ON p.id_user = u.id where u.username = "${username}" ORDER BY p.id_post DESC `
    const rows = await conexion.query(sql, [username]);
    res.setHeader("Content-Type", "application/json");
    if(rows.length > num){
        if(rows.length > num) {
            if(rows.length > num + 5) {
                res.status(200).send(JSON.stringify(rows.slice(num, final), null, 4));
            } else {
                res.status(200).send(JSON.stringify(rows.slice(num, final), null, 4));
            }
        } else {
            res.status(200).send(JSON.stringify(rows.slice(num, num - (rows.length - 1) ), null, 4));
        }
    }});

//Datos para post por id de post
routing.get("/homeasd/post/:id", async(req, res) => {
    const id = req.params.id;
    const sql = `SELECT u.username, u.name, p.id_post, p.text, u.profpicture, p.hasMedia, p.media FROM users u INNER JOIN post p ON p.id_user = u.id where p.id_post = "${id}" ORDER BY p.id_post DESC `
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(rows[0], null, 4));
});

//Datos para post por id de post
routing.get("/homeasd/imagepost/:id/:n", async(req, res) => {
    const id = req.params.id;
    const n = req.params.n;
    let num = (n-1) * 2;
    let final = (n*2) - 1;
    const sql = `SELECT u.username, u.name, p.id_post, p.text, u.profpicture, p.hasMedia, p.media FROM users u INNER JOIN post p ON p.id_user = u.id WHERE p.id_post = "${id}" AND p.hasMedia = 1 ORDER BY p.id_post DESC `
    const rows = await conexion.query(sql, [id]);
    res.setHeader("Content-Type", "application/json");
    if(rows.length > num){
        if(rows.length > num) {
            if(rows.length > num + 2) {
                res.status(200).send(JSON.stringify(rows.slice(num, final), null, 4));
            } else {
                res.status(200).send(JSON.stringify(rows.slice(num, 1), null, 4));
            }
        } else {
            res.status(200).send(JSON.stringify(rows.slice(num, num - (rows.length - 1) ), null, 4));
        }
    }
});

module.exports = routing;
