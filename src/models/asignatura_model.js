// import api_gateway from "../api_gateway/api_gateway.js"

// const Calificacion = require('./calificacion_model')


//read only

module.exports = class Asignatura {
 constructor(codigo,nombre,creditos,tipo,periodo,esConsolidada,calificaciones){
    this._codigo = codigo //number
    this._nombre = nombre
    this._creditos = creditos //number+
    this._tipo = tipo //string
    this._periodo = periodo //string
    this._esConsolidada = esConsolidada //bool
    this._calificaciones = calificaciones //Calificacion, array

    this._definitiva = this.definitiva
    this._esAprobada = this.esAprobada

 }

get codigo(){
    return this._codigo
}

get creditos(){
    return this._creditos
}

get tipo(){
    return this._tipo
}

get periodo(){
    return this._periodo
}

get esConsolidada(){
    return this._esConsolidada
}

get calificaciones(){
    return this._calificaciones
}


get definitiva(){
    let suma = 0

    // "{'jlizarazoa':5,'jumorap':4.5, 'juan': 3}"

    

    this.calificaciones.forEach(calificacion => {
        suma = suma + (calificacion.porcentaje * calificacion.nota)       
    });

    //convierte a string
    this._definitiva = Number(suma.toFixed(1))

    return this._definitiva
}

get esAprobada(){
    if(this.definitiva >= 3.0){
        this._esAprobada = true
    }else{
        this._esAprobada = false
    }
    return this._esAprobada
}
}