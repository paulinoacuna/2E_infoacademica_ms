const express = require('express')
const router = express.Router()
// const getHistoriaAcademica = require('../controllers/historia_academica_controller')

const createHistoriaAcademica = require('../controllers/historia_academica_controller')


router.post('/api/historiaAcademica/',(request,response) => {
    
    const data = request.body

    // console.log(request)
    
    const historia = createHistoriaAcademica(data)

    if(historia){
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

//juliette api
/*
 
course
{
   "id":"01",
   "id_asignature":"01",
   "term":"2022-2",
   "consolidated":true
}


get courses

[
    {
        "id": 1,
        "id_asignature": 1,
        "term": "2022-2",
        "consolidated": true
    },
    {
        "id": 2,
        "id_asignature": 1,
        "term": "2022-2",
        "consolidated": false
    }
]

grades
{
"id": "01",
"id_course": "01",
"name": "parcial 1",
"percentage": 0.30,
"grades": 4.5
}


get grades
[
    {
        "id": 1,
        "id_course": 1,
        "name": "parcial 1",
        "percentage": 0.3,
        "grades": "4.5"
    },
    {
        "id": 2,
        "id_course": 1,
        "name": "parcial 2",
        "percentage": 0.2,
        "grades": "2.7"
    },
    {
        "id": 3,
        "id_course": 1,
        "name": "parcial 3",
        "percentage": 0.5,
        "grades": "5"
    }
]

history
[
    {
        "id": 1,
        "id_student": "1010063372",
        "id_program": 1,
        "percentage_adv": 0.7,
        "asignature_taken": "[1]"
    }
]


ALL:


{
    "Histories": [
        {
            "id": 1,
            "id_student": "1010063372",
            "id_program": 1,
            "percentage_adv": 0.7,
            "asignature_taken": "[1]"
        }
    ],
    "Grades": [
        {
            "id": 1,
            "id_course": 1,
            "name": "parcial 1",
            "percentage": 0.3,
            "grades": "4.5"
        },
        {
            "id": 2,
            "id_course": 1,
            "name": "parcial 2",
            "percentage": 0.2,
            "grades": "2.7"
        },
        {
            "id": 3,
            "id_course": 1,
            "name": "parcial 3",
            "percentage": 0.5,
            "grades": "5"
        }
    ],
    "Courses": [
        {
            "id": 1,
            "id_asignature": 1,
            "term": "2022-2",
            "consolidated": true
        },
        {
            "id": 2,
            "id_asignature": 1,
            "term": "2022-2",
            "consolidated": false
        }
    ]
}









tipo de post que recibo

{
    "query":{
        "history": [
        {
            "id": 1,
            "id_student": "1010063372",
            "id_program": 1,
            "percentage_adv": 0.7,
            "asignature_taken": "[1]"
        }
    ],
    "grade": [
        {
            "id": 1,
            "id_course": 1,
            "name": "parcial 1",
            "percentage": 0.3,
            "grades": "4.5"
        },
        {
            "id": 2,
            "id_course": 1,
            "name": "parcial 2",
            "percentage": 0.2,
            "grades": "2.7"
        },
        {
            "id": 3,
            "id_course": 1,
            "name": "parcial 3",
            "percentage": 0.5,
            "grades": "5"
        }
    ],
    "course": [
        {
            "id": 1,
            "id_asignature": 1,
            "term": "2022-2",
            "consolidated": true
        },
        {
            "id": 2,
            "id_asignature": 1,
            "term": "2022-2",
            "consolidated": false
        }
    ]
    }
    
}


lo que respondo

{
    "_documento_identidad": "1010063372",
    "_id_historia": 1,
    "_id_programa": 1,
    "_porcentaje_avance": 0.7,
    "_asignaturas": [
        {
            "_codigo": 1,
            "_nombre": "Calculo Diferencial",
            "_creditos": 4,
            "_tipo": "Fundamentacion Obligatoria",
            "_periodo": "2022-2",
            "_esConsolidada": true,
            "_calificaciones": [
                {
                    "_nombre": "parcial 1",
                    "_porcentaje": 0.3,
                    "_nota": "4.5"
                },
                {
                    "_nombre": "parcial 2",
                    "_porcentaje": 0.2,
                    "_nota": "2.7"
                },
                {
                    "_nombre": "parcial 3",
                    "_porcentaje": 0.5,
                    "_nota": "5"
                }
            ],
            "_definitiva": 0,
            "_esAprobada": false
        },
        {
            "_codigo": 2,
            "_nombre": "Arquitectura de Software",
            "_creditos": 4,
            "_tipo": "Fundamentacion Optativa",
            "_periodo": "2022-2",
            "_esConsolidada": false,
            "_calificaciones": [
                {
                    "_nombre": "parcial 1",
                    "_porcentaje": 0.3,
                    "_nota": "4.5"
                },
                {
                    "_nombre": "parcial 2",
                    "_porcentaje": 0.2,
                    "_nota": "2.7"
                },
                {
                    "_nombre": "parcial 3",
                    "_porcentaje": 0.5,
                    "_nota": "5"
                }
            ],
            "_definitiva": 0,
            "_esAprobada": false
        }
    ],
    "_papa": 0,
    "_pa": null,
    "_semestreActual": "2022-1",
    "_pappi": 0,
    "_asignaturasInscritas": []
}

 */

module.exports = router