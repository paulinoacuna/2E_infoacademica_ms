const express = require('express')
const router = express.Router()
// const getHistoriaAcademica = require('../controllers/historia_academica_controller')

const createHistoriaAcademica = require('../controllers/historia_academica_controller')


router.post('/api/historiaAcademica/',(request,response) => {
    
    const data = request.body

    // console.log(request)
    
    const historia = createHistoriaAcademica(data)

    if(historia){
        console.log("respuesta")
        response.json(historia)
    }else{
        response.status(404).end()
    }
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