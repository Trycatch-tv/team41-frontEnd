const Curso = require('../models/cursos');


// Middleware para obtener un curso por su id
async function getCurso(req, res, next) {
  let curso;

  try {
    curso = await Curso.findById(req.params.id);
    if (curso == null) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.curso = curso;
  next();
}

module.exports = getCurso;
