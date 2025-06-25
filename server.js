const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./public/js/db');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));


// **Ruta de login sin hasheo**
app.post('/login', (req, res) => {
    const { usuario, clave } = req.body;
    const query = `SELECT * FROM login WHERE usuario = ? AND clave = ?`;

    db.query(query, [usuario, clave], (err, results) => {
        if (err) {
            console.error("Error en la consulta SQL:", err);
            res.status(500).json({ message: "Error interno del servidor" });
            return;
        }

        if (results.length > 0) {
            res.json({ message: "Login exitoso", user: { id: results[0].id, username: results[0].username } });
        } else {
            res.status(401).json({ message: "Credenciales incorrectas" });
        }
    });
});


//insertar TECNICOS u ADMINISTRADORES
app.post('/insert', (req, res) => {
    const { nombres, telefono, usuario, clave, rol, estado, fecha_creacion } = req.body;

    if (!nombres || !telefono || !usuario || !clave || !rol || !estado || !fecha_creacion) {
        return res.status(400).json({ error: "Validar Campos" });
    }

    console.log("Datos recibidos:", req.body);

    const sql = "INSERT INTO login(nombres, telefono, usuario, clave, rol, estado, fecha_creacion) VALUES(?,?,?,?,?,?,?);";

    db.query(sql, [nombres, telefono, usuario, clave, rol, estado, fecha_creacion], (err, results) => {
        if (err) {
            console.error("Error en la inserción:", err);
            res.status(500).json({ error: "Error al insertar usuario" });
            return;
        }
        res.json({ message: "Usuario insertado correctamente", id: results.insertId });
    });
});



// Ruta para obtener ORDENES
app.get('/ordenes', async (req, res) => {
  const ordenes = await db.query('SELECT * FROM ordenes'); // o como sea tu consulta
  res.json(ordenes);
});


//Captura cliente SOPORTE html
app.post("/api/agendar", async (req, res) => {
  const { producto, falla, sistema, descripcion, nombres, direccion,  municipio, zona} = req.body;
  // Aquí va tu lógica para insertar en la BD
  await pool.query("INSERT INTO ordenes (producto, falla, sistema, descripcion, nombres, direccion,  municipio, zona) VALUES (?,?,?,?,?,?,?,?)", [producto, falla]);
  res.json({ mensaje: "Ticket guardado correctamente" });
});


// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/index.html`);
});