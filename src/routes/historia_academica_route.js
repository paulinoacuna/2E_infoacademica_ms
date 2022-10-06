const express = require('express')
const router = express.Router()
const getHistoriaAcademica = require('../controllers/historia_academica_controller')

const createHistoriaAcademica = require('../controllers/historia_academica_controller')


router.get('/historiaAcademica/:nombre_usuario',(request,response) => {
    const nombre_usuario = request.params.nombre_usuario
    
    const historiaAcademica = getHistoriaAcademica(nombre_usuario)

    if(historiaAcademica){
        response.json(historiaAcademica)
    }else{
        response.status(404).end()
    }
    console.log(historiaAcademica)
})

router.post('/api/historiaAcademica/:historia_academica',(request,response) => {
    const historiaAcademica = request.params.historia_academica
    
    const historiaActualizada = createHistoriaAcademica(historiaAcademica)

    if(historiaActualizada){
        response.json(historiaActualizada)
    }else{
        response.status(404).end()
    }
    console.log(historiaActualizada)
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