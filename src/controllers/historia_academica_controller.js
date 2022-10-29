//retornar arrays, onjetos ya creados a las routes


// const docEstudiantes = ["pacuna","rubiano","epa"]


module.exports = function createHistoriaAcademica(data) {

    //obtener clases
    const Asignatura = require('../models/asignatura_model')
    const Calificacion = require('../models/calificacion_model')
    const HistoriaAcademica = require('../models/historia_academica_model')

    console.log(data)
  
    const historiaAcademica = data.query.history[0]


    const asignatures = data.query.course
    const asignaturas = []


    const grades = data.query.grade //array de grades
    const calificaciones = []


    grades.forEach(grade => {
        const x = new Calificacion(grade.name,grade.percentage,grade.grades)
        calificaciones.push(x)

    });

    const materias = ["Calculo Diferencial","Arquitectura de Software","Computacion Visual","Matematicas Discretas","Ingenieria Economica","Ingenieria de Software"]
    const tipo = ["Fundamentacion Obligatoria","Fundamentacion Optativa","Disciplinar Obligatoria","Disciplinar Optativa"]

    let i = 0;
    let j = 0;

    asignatures.forEach(course => {
        const x = new Asignatura(course.id,materias[i],4,tipo[j],course.term,course.consolidated,calificaciones)
        if(i <= 5){
            i++
        }else{
            i = 0
        }
        if(j <= 3){
            j++
        }else{
            j = 0
        }
        
        asignaturas.push(x)
     });

    //history: jsonHistory,
    //asignatures: jsonAsignatures,
    //grades: jsonGrades


const historia_01 = new HistoriaAcademica(historiaAcademica.id_student,historiaAcademica.id,historiaAcademica.id_program,historiaAcademica.percentage_adv,asignaturas)
        
    return historia_01
}