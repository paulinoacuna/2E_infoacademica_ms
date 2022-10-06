//retornar arrays, onjetos ya creados a las routes


// const docEstudiantes = ["pacuna","rubiano","epa"]


module.exports = function createHistoriaAcademica(data) {

    //obtener clases
    const Asignatura = require('../models/asignatura_model')
    const Calificacion = require('../models/calificacion_model')
    const HistoriaAcademica = require('../models/historia_academica_model')

    console.log(data)
  
    const historiaAcademica = data.history


    const asignatures = data.asignatures
    const asignaturas = []


    const grades = data.grades //array de grades
    const calificaciones = []


    grades.forEach(grade => {
        const x = new Calificacion(grade.name,grade.percentage,grade.values)
        calificaciones.push(x)

    });

    asignatures.forEach(asignatura => {
        const x = new Asignatura(asignatura.id,"Calculo Diferencial",4,"Fundamentacion Obligatoria",asignatura.term,asignatura.consolidated,calificaciones)
        asignaturas.push(x)
     });

    //history: jsonHistory,
    //asignatures: jsonAsignatures,
    //grades: jsonGrades


const historia_01 = new HistoriaAcademica(historiaAcademica.id_student,historiaAcademica.id,historiaAcademica.id_program,historiaAcademica.percentage_adv,asignaturas)
        
    return historia_01
}