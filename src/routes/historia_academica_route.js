const express = require('express')
const router = express.Router()
const getHistoriaAcademica = require('../controllers/historia_academica_controller')


router.get('/api/historiaAcademica/:documento_identidad',(request,response) => {
    const documento_identidad = request.params.documento_identidad
    
    const historiaAcademica = getHistoriaAcademica(documento_identidad)

    if(historiaAcademica){
        response.json(historiaAcademica)
    }else{
        response.status(404).end()
    }
    console.log(historiaAcademica)
})



//EXAMPLES
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'application/json' })
//   response.end('Hello World')
//   //request, pide datos al server (path)
//   //response, el server devulve respuesta (json)
// })
//en la request siempre llega string



module.exports = router