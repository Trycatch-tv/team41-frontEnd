require('dotenv').config();
const moongose = require('mongoose')
const dataBaseUri = process.env.MONGO_DB_URI2

moongose.set("strictQuery", false)
moongose.connect(dataBaseUri,
{
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is conected'))
    .catch(err => console.log(err));