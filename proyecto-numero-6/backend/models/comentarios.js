const mongoose = require('mongoose');

const ComentarioSchema = new mongoose.Schema({
  fecha: { type: Date, default: Date.now },
  nombreCurso: { type: String },
  comentario: { type: String },
  estudiante: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Estudiante' }],
  curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso' }, // Referencia al curso
});

module.exports = mongoose.model('Comentario', ComentarioSchema);
