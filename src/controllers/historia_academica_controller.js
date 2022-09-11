//retornar arrays, onjetos ya creados a las routes


const docEstudiantes = ["1010063372","79691165","52319141"]

module.exports = function getHistoriaAcademica(doc_identidad) {
    
    //implementar busqueda por doc identidad


    const documento_identidad = docEstudiantes.find(e => e == doc_identidad)

    if(!documento_identidad){
        return null
    }


//obtener clases
const Asignatura = require('../models/asignatura_model')
const Calificacion = require('../models/calificacion_model')
const HistoriaAcademica = require('../models/historia_academica_model')



const cal_0001_1 = new Calificacion("Parcial 1",0.30,3.1)
const cal_0001_2 = new Calificacion("Parcial 2",0.30,4.2)
const cal_0001_3 = new Calificacion("Parcial 3",0.40,4.8)

    const cals_0001 = [cal_0001_1,cal_0001_2,cal_0001_3]

const cal_0002_1 = new Calificacion("Parcial 1",0.50,1.5)
const cal_0002_2 = new Calificacion("Parcial 2",0.50,4.0)
    
    const cals_0002 = [cal_0002_1,cal_0002_2]


const as_1 = new Asignatura("0001","Calculo Diferencial",4,"Fundamentacion Obligatoria","2022-2",true,cals_0001)
const as_2 = new Asignatura("0002","Algoritmos",3,"Fundamentacion Optativa","2022-1",false,cals_0002)

    const asignaturas_01 = [as_1,as_2]

const historia_01 = new HistoriaAcademica(documento_identidad,"01","05","0.79",asignaturas_01)


    return historia_01
}