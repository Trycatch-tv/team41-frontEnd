const Comentario = require('../models/comentarios')
const Estudiante = require('../models/estudiante')
const Curso = require('../models/cursos')

const eliminarComentario = async (req, res, next) => {
    const comentarioId = req.params.id;
    try {
      // Buscamos el comentario por su id y lo almacenamos en una variable
      const comentario = await Comentario.findById(comentarioId);
  
      // Si no existe el comentario, retornamos un error
      if (!comentario) {
        return res.status(404).json({ message: 'Comentario no encontrado' });
      }
  
      // Eliminamos el comentario de la tabla de comentarios
      await comentario.remove();
  
      // Buscamos referencias al comentario en la tabla de usuarios y las eliminamos
      await Estudiante.updateMany(
        { 'comentarios': comentarioId },
        { $pull: { 'comentarios': comentarioId } }
      );
  
      // Buscamos referencias al comentario en la tabla de publicaciones y las eliminamos
      await Curso.updateMany(
        { 'comentarios': comentarioId },
        { $pull: { 'comentarios': comentarioId } }
      );
  
      // Si todo ha ido bien, llamamos al siguiente middleware
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = eliminarComentario;