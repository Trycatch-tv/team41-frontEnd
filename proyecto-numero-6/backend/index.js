const express = require('express');
const fileupload = require('express-fileupload');
const bodyParser = require ('body-parser')
const morgan = require('morgan');
const corsMiddleware = require('./cors');
const estudiantesRouter = require('./routes/estudiantes.routes');
const comentariosRouter = require('./routes/comentarios.route');
const cursosRouter = require('./routes/cursos.route');
const servidor = require('./routes/servidor')
const cors = require('cors');
require('dotenv').config();
require('./database')

const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


app.use(morgan('dev'))

app.use(fileupload({
    tempFileDir: '/temp'
}))
//app.use(corsMiddleware);
app.use(cors());

app.use('/estudiantes',estudiantesRouter);
app.use('/comentarios', comentariosRouter);
app.use('/cursos', cursosRouter);
app.use('/', servidor);

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log('connected to port ' + port)
})
