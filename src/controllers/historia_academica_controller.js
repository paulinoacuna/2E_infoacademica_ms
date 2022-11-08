//retornar arrays, onjetos ya creados a las routes


// const docEstudiantes = ["pacuna","rubiano","epa"]


module.exports = function createHistoriaAcademica(data) {

    //obtener clases
    const Asignatura = require('../models/asignatura_model')
    const Calificacion = require('../models/calificacion_model')
    const HistoriaAcademica = require('../models/historia_academica_model')

    // console.log(data)
  
    const historiaAcademica = data.query.history[0] //object

    // console.log(data.query.courses)
    const cursos = data.query.courses //array
    const cursosResponse = []


    const calificaciones = data.query.grades //array de grades
    const calificacionesResponse = []

        //[[{},{},{}],[{},{}]]

    const idCalificaciones = []
    const todasCalificaciones = []


    console.log(calificaciones)

    //llenar idCalificaciones
    calificaciones.forEach(lista => {
        lista.forEach((calificacion) =>{
            // console.log(calificacion)

            

        const value = new Calificacion(calificacion.name,calificacion.percentage,calificacion.grades)

        const idIndex = idCalificaciones.indexOf(calificacion.id_course)
        
        //-1 si no está
        if(idIndex == -1){
            //agregar
            idCalificaciones.push(calificacion.id_course)

            const newIndex = (todasCalificaciones.push([]) - 1)

            todasCalificaciones[newIndex].push(value)
            
        }else{
            //ya en lista
            todasCalificaciones[idIndex].push(value)
        
        }

        })
    });


    //const materias = ["Calculo Diferencial","Arquitectura de Software","Computacion Visual","Matematicas Discretas","Ingenieria Economica","Ingenieria de Software"]
    //const tipo = ["Fundamentacion Obligatoria","Fundamentacion Optativa","Disciplinar Obligatoria","Disciplinar Optativa"]


    cursos.forEach(curso =>{

        console.log(idCalificaciones)
        const idIndex = idCalificaciones.indexOf(curso.id)
        let misCalificaciones = []

        // console.log(idIndex)
        
        if(idIndex !== -1){
            misCalificaciones = [...todasCalificaciones[idIndex]]
            
        }else{
            console.log("Asignatura no tiene calificaciones")
        }
        const value = new Asignatura(curso.id,"Calculo Diferencial",4,"Fundamentacion Obligatoria",curso.term,curso.consolidated,misCalificaciones)
        cursosResponse.push(value)
    });
    


    // const x = new Asignatura(course.id,materias[i],4,tipo[j],course.term,course.consolidated,calificaciones)
       
    // asignaturas.push(x)
    

    //history: jsonHistory,
    //asignatures: jsonAsignatures,
    //grades: jsonGrades

// console.log(idCalificaciones)
// console.log(todasCalificaciones)

 const historiaAcademicaResponse = new HistoriaAcademica(historiaAcademica.id_student,historiaAcademica.id,historiaAcademica.id_program,historiaAcademica.percentage_adv,cursosResponse)
        


    return historiaAcademicaResponse
}