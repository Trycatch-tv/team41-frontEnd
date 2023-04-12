const Comentario = require('../models/comentarios')

// Middleware para obtener un comentario por su id
async function getComentario(req, res, next) {
    let comentario;

    try {
        comentario = await Comentario.findById(req.params.id);
        
        if (comentario == null) {
            return res.status(404).json({ message: 'Comentario no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.comentario = comentario;
    next();
}

module.exports = getComentario