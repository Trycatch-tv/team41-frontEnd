const mongoose = require('mongoose');
const Curso = require('./cursos');

const EstudianteSchema = new mongoose.Schema({
  username: { type: String, required: true },
  correo: { type: String, required: true },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  telefono: { type: String },
  comentarios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comentario' }],
  cursos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Curso' }],
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);

