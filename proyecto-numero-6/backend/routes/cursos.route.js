const express = require('express');
const router = express.Router();
const multer = require('multer');
const Curso = require('../models/cursos');
const Comentario = require('../models/comentarios');
const Estudiante = require('../models/estudiante');
const getCurso = require('../middlewares/cursoPorId')


// Configuración de Multer para cargar imágenes
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
});

// Obtener todos los cursos
//http://localhost:4000/cursos
router.get('/', async (req, res) => {
    try {
        const cursos = await Curso.find();
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un curso por su id
//http://localhost:4000/cursos/:id
router.get('/:id', getCurso, async (req, res) => {
    try {
        const comentarios = await Comentario.find({ curso_id: req.params.id });
        const estudiantes = await Estudiante.find({ cursos: req.params.id });
        res.json({
            curso: res.curso,
            comentarios: comentarios,
            estudiantes: estudiantes,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear un nuevo curso
//http://localhost:4000/cursos/crear
router.post('/crear', async (req, res) => {
    const curso = new Curso({
        nombreCurso: req.body.nombreCurso,
        descripcion: req.body.descripcion,
        numeroEstudiantes: req.body.numeroEstudiantes,
        duracion: req.body.duracion,
        imagen: {
            data: Buffer.from(req.body.imagen.data, 'base64'),
            contentType: req.body.imagen.contentType,
        }

    });

    try {
        const nuevoCurso = await curso.save();
        res.status(201).json(nuevoCurso);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});





// Actualizar un curso por su id
//http://localhost:4000/cursos/:id
router.patch('/:id', getCurso, async (req, res) => {
    if (req.body.nombreCurso != null) {
        res.curso.nombreCurso = req.body.nombreCurso;
    }
    if (req.body.descripcion != null) {
        res.curso.descripcion = req.body.descripcion;
    }
    if (req.body.numeroEstudiantes != null) {
        res.curso.numeroEstudiantes = req.body.numeroEstudiantes;
    }
    if (req.body.duracion != null) {
        res.curso.duracion = req.body.duracion;
    }
    if (req.body.imagen != null) {
        res.curso.imagen.data = Buffer.from(req.body.imagen.data, 'base64');
        res.curso.imagen.contentType = req.body.imagen.contentType;
    }

    try {
        const cursoActualizado = await res.curso.save();
        res.json(cursoActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un curso por su id
//http://localhost:4000/curso/:id
router.delete('/:id', getCurso, async (req, res) => {
    try {
        await res.curso.remove();
        res.json({ message: 'Curso eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




module.exports = router;
