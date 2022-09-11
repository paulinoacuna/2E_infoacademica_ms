const express = require('express')
const app = express()
app.use(express.json())

//ROUTES
const routes = require('./src/routes/historia_academica_route')
app.use(routes)


const PORT = 3001
app.listen(PORT,() =>{
    console.log(`Server running on port ${PORT}`)
})