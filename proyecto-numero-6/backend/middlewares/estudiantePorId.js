const Estudiante = require('../models/estudiante')

// Middleware para obtener un estudiante por su id
async function getEstudiante(req, res, next) {
    let estudiante;

    try {
        estudiante = await Estudiante.findById(req.params.id);
        if (estudiante == null) {
            return res.status(404).json({ message: 'Estudiante no encontrado' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.estudiante = estudiante;
    next();
}

module.exports = getEstudiante