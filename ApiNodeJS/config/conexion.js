const mysql = require('mariadb');
const conexion = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'proyecto'
})

conexion.getConnection()
    .then(conn => console.log('La conexion a la base de datos ha funcionado correctamente'))
    .catch(err => console.log('La conexion a la base de datos a fallado', err));

module.exports = conexion;