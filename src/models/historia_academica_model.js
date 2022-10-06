// import api_gateway from "../api_gateway/api_gateway.js"

const semestreActual = "2022-1"

//read only
module.exports = class HistoriaAcademica {
    constructor(documento_identidad,id_historia,id_programa,porcentaje_avance,asignaturas){
        
        console.log(documento_identidad)
        console.log(id_historia)
        console.log(id_programa)
        console.log(porcentaje_avance)

        this._documento_identidad = documento_identidad //string
        this._id_historia = id_historia //number
        this._id_programa = id_programa //number
        this._porcentaje_avance = porcentaje_avance //number

        this._asignaturas = asignaturas //Asignatura ,array

        this._papa = this.papa
        this._pa = this.pa
        this._pappi = this.pappi
        this._semestreActual = this.semestreActual
        this._asignaturasInscritas = this.asignaturasInscritas //array
    }


    get documento_identidad(){
        return this._documento_identidad
    }

    get id_historia(){
        return this._id_historia
    }

    get id_programa(){
        return this._id_programa
    }
    get porcentaje_avance(){
        return this._porcentaje_avance
    }
    get asignaturas(){
        return this._asignaturas
    }

    get papa(){
        let suma = 0
        let totalCreditos = 0

        this.asignaturas.forEach(asignatura => {
            suma = suma + (asignatura.definitiva * asignatura.creditos)
            totalCreditos = totalCreditos + asignatura.creditos
        });

        const total = suma/totalCreditos

        return Number(total.toFixed(2))

    }

    get pa(){
        let suma = 0
        let totalCreditos = 0

        this.asignaturas.forEach(asignatura => {
            if(asignatura.esAprobada == true){
                //asignatura aprobada
                suma = suma + (asignatura.definitiva * asignatura.creditos)
                totalCreditos = totalCreditos + asignatura.creditos
            }else{
                //asignatura perdida
            }


            
        });

        const total = suma/totalCreditos
        return Number(total.toFixed(2))

    }

    get pappi(){
        let suma = 0
        let totalCreditos = 0

        

        this.asignaturas.forEach(asignatura => {

            if(asignatura.periodo == this.semestreActual && asignatura.esConsolidada == true){
                //hace parte del semestre actual y ya tiene definitiva
                suma = suma + (asignatura.definitiva * asignatura.creditos)
                totalCreditos = totalCreditos + asignatura.creditos
                
            }else{
                //no hace parte del semestre actual o no tiene definitiva
            }            
        });

        if(suma == 0 || totalCreditos == 0 ){
            return 0
        }else{
            const total = suma/totalCreditos
            return Number(total.toFixed(2))
        }

    }

    get semestreActual(){
        this._semestreActual = semestreActual
        return this._semestreActual
    }

    get asignaturasInscritas(){
        this._asignaturasInscritas = []

        this.asignaturas.forEach( asignatura =>{
            if(asignatura.periodo == this.semestreActual){
                this._asignaturasInscritas.push(asignatura)
            }
        })

        return this._asignaturasInscritas
    }

    resumenCreditos(){   
        //exigidos,cursados,inscritos,faltantes



    }


}


