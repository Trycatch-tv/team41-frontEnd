const express = require('express');
const router = express.Router();
const Estudiante = require('../models/estudiante');
const getEstudiante = require('../middlewares/estudiantePorId')

//inicializando la raiz del servidor
router.get('/', (req, res) => {
    res.send('¡Bienvenido a mi aplicación!');
  });


// Obtener todos los estudiantes
//http://localhost:4000/estudiantes/listaEstudiantes
router.get('/listaEstudiantes', async (req, res) => {
    try {
        const estudiantes = await Estudiante.find();
        res.json(estudiantes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un estudiante por su id
//http://localhost:4000/estudiantes/:id
router.get('/:id', getEstudiante, (req, res) => {
    res.json(res.estudiante);
});

// Crear un nuevo estudiante
//http://localhost:4000/estudiantes/inscripciones
router.post('/inscripciones', async (req, res) => {
    console.log(req.body)
    const estudiante = new Estudiante({
        username: req.body.estudiante.username,
        correo: req.body.estudiante.correo,
        nombre: req.body.estudiante.nombre,
        apellido: req.body.estudiante.apellido,
        edad: req.body.estudiante.edad,
        telefono: req.body.estudiante.telefono,
        
    });
    console.log(estudiante, 'este es el estudiante')

    try {
        const nuevoEstudiante = await estudiante.save();
        res.status(201).json(nuevoEstudiante);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar un estudiante por su id
//http://localhost:4000/estudiantes/actualizarDatos/:id
router.patch('/actualizarDatos/:id', getEstudiante, async (req, res) => {
    if (req.body.estudiante.username != null) {
        res.estudiante.username = req.body.estudiante.username;
    }
    if (req.body.estudiante.correo != null) {
        res.estudiante.correo = req.body.estudiante.correo;
    }
    if (req.body.estudiante.nombre != null) {
        res.estudiante.nombre = req.body.estudiante.nombre;
    }
    if (req.body.estudiante.apellido != null) {
        res.estudiante.apellido = req.body.estudiante.apellido;
    }
    if (req.body.estudiante.edad != null) {
        res.estudiante.edad = req.body.estudiante.edad;
    }
    if (req.body.estudiante.telefono != null) {
        res.estudiante.telefono = req.body.estudiante.telefono;
    }

    try {
        const estudianteActualizado = await res.estudiante.save();
        res.json(estudianteActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un estudiante por su id
//http://localhost:4000/estudiantes/borrarEstudiante/:id
router.delete('/borrarEstudiante/:id', getEstudiante, async (req, res) => {
    try {
        await res.estudiante.remove();
        res.json({ message: 'Perfil eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;

