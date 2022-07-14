const express = require('express')
require('dotenv').config()
require('./db/connection')
const user_route = require('./routes/user')

//settings

const app = express()
const port = process.env.PORT || 9000


//Middleware

app.use(express.json())
app.use('/api', user_route)


//Server listening

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto: ", port);
})