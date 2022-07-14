const mongoose = require('mongoose')

const db_user = process.env.DB_USER
const db_password = process.env.DB_PASSWORD
const db_name = process.env.DB_NAME

const uri_db = `mongodb+srv://${db_user}:${db_password}@clustertercer.f3mv0.mongodb.net/${db_name}?retryWrites=true&w=majority`

mongoose.connect(uri_db)
.then( () => console.log('Base de datos conectada') )
.catch(() => console.log('Error de conexión a la base de datos'))