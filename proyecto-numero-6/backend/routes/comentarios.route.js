const express = require('express');
const router = express.Router();
const Comentario = require('../models/comentarios');
const Estudiante = require('../models/estudiante');
const Curso = require('../models/cursos');
const getCurso = require('../middlewares/cursoPorId')
const getComentario = require('../middlewares/comentariosPorId')

// Obtener todos los comentarios
//http://localhost:4000/comentarios
router.get('/', async (req, res) => {
    try {
        const comentarios = await Comentario.find();
        res.json(comentarios);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un comentario por su id
//http://localhost:4000/comentarios/:id
router.get('/:id', getComentario, (req, res) => {
    res.json(res.comentario);
});

// Crear un nuevo comentario
//http://localhost:4000/comentarios/crear
router.post('/crear', async (req, res) => {
    const comentario = new Comentario({
        comentario: req.body.comentario,
        estudiante: req.body.estudiante,
        curso: req.body.curso
    });

    try {
        const nuevoComentario = await comentario.save();
        // agregar comentario a la lista de comentarios del estudiante
        const estudiante = await Estudiante.findById(req.body.estudiante);
        estudiante.comentarios.push(nuevoComentario._id);
        await estudiante.save();
        // agregar comentario a la lista de comentarios del curso
        const curso = await Curso.findById(req.body.curso);
        curso.comentarios.push(nuevoComentario._id);
        await curso.save();
        res.status(201).json(nuevoComentario);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Agregar un comentario a un curso por su id
//http://localhost:4000/comentarios/curso/:id
router.post('/curso/:id', getCurso, async (req, res) => {
    const comentario = new Comentario({
        comentario: req.body.comentario,
        nombreCurso: req.body.nombreCurso,
        curso: res.curso, // Referencia al curso
        fecha: req.body.fecha,
    });

    try {
        const nuevoComentario = await comentario.save();
        res.status(201).json(nuevoComentario);


    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar un comentario por su id
//http://localhost:4000/comentarios/:id
router.patch('/:id', getComentario, async (req, res) => {
    if (req.body.comentario != null) {
        res.comentario.comentario = req.body.comentario;
    }
    if (req.body.estudiante != null) {
        res.comentario.estudiante = req.body.estudiante;
    }
    if (req.body.curso != null) {
        res.comentario.curso = req.body.curso;
    }

    try {
        const comentarioActualizado = await res.comentario.save();
        res.json(comentarioActualizado);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un comentario por su id
////http://localhost:4000/comentarios/eliminar/:id
router.delete('/eliminar/:id', getComentario, async (req, res) => {
    try {
        // remover comentario de la lista de comentarios del estudiante
        const estudiante = await Estudiante.findById(res.comentario.estudiante);
        estudiante.comentarios.pull(res.comentario._id);
        await estudiante.save();
        // remover comentario de la lista de comentarios del curso
        const curso = await Curso.findById(res.comentario.curso);
        curso.comentarios.pull(res.comentario._id);
        await curso.save();
        // eliminar el comentario
        await res.comentario.remove();
        res.json({ message: 'Comentario eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;
