//retornar arrays, onjetos ya creados a las routes


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
    const idCalificaciones = []
    const todasCalificaciones = []

    //llenar idCalificaciones
    calificaciones.forEach(lista => {
        lista.forEach((calificacion) => {
            let calsObject = JSON.parse(calificacion.grades.replaceAll("'", '"'))
            const value = new Calificacion(calificacion.name,calificacion.percentage,calsObject[historiaAcademica.id_student])
            const idIndex = idCalificaciones.indexOf(parseInt(calificacion.id_course))
        
            //-1 si no está
            if (idIndex === -1) {
                //agregar
                idCalificaciones.push(parseInt(calificacion.id_course))
                const newIndex = (todasCalificaciones.push([]) - 1)
                todasCalificaciones[newIndex].push(value)

            } else {
                //ya en lista
                todasCalificaciones[idIndex].push(value)
            }
        })
    });


    cursos.forEach(curso => {
        console.log(curso.id)
        console.log(idCalificaciones)

        const idIndex = idCalificaciones.indexOf(parseInt(curso.id))
        let misCalificaciones = []

        console.log(idIndex)
        
        if (idIndex !== -1) {
            misCalificaciones = [...todasCalificaciones[idIndex]]
            
        }else{
            console.log("Asignatura no tiene calificaciones")
        }
        const value = new Asignatura(curso.id,curso.id_asignature,curso.nombre_asignatura,4, curso.nombre_tipologia,curso.term,curso.consolidated,misCalificaciones)
        cursosResponse.push(value)
    });


    return new HistoriaAcademica(historiaAcademica.id_student, historiaAcademica.id, historiaAcademica.id_program, historiaAcademica.percentage_adv, cursosResponse)
}


/*


{
  getHistory(id: 76654332){
    _documento_identidad
_id_historia
_id_programa
_porcentaje_avance
_papa
_pa
_semestreActual
_pappi
_asignaturasInscritas {
  _codigo
  _id_asignature
  _nombre
  _creditos
  _tipo
  _periodo
  _esConsolidada
  _definitiva
  _esAprobada
}
_asignaturas{
  _codigo
  _id_asignature
_nombre
_creditos
_tipo
_periodo
_esConsolidada
_definitiva
_esAprobada
_calificaciones{
  _nombre
_porcentaje
_nota
}
}
    }
  
}
*/
