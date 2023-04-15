const mongoose = require('mongoose');
const Comentario = require('./comentarios');

const CursoSchema = new mongoose.Schema({
  fechaInscripcion: { type: Date, default: Date.now },
  nombreCurso: { type: String },
  idCurso: { type: String },
  calificado: { type: Boolean, default: false },
  descripcion: { type: String },
  numeroEstudiantes: { type: Number },
  duracion: { type: Number },
  comentarios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comentario' }],
  imagen: { data: Buffer, contentType: String } // Campo de imagen en formato WebP
});

module.exports = mongoose.model('Curso', CursoSchema);

