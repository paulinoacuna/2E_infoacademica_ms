// import api_gateway from "../api_gateway/api_gateway.js"

//read only

module.exports = class Calificacion {
    constructor(nombre,porcentaje,nota){
        this._nombre = nombre //string
        this._porcentaje = porcentaje //number
        this._nota = nota //number
    }

    get nombre(){
        return this._nombre
    }

    get porcentaje(){
            return this._porcentaje
    }

    get nota(){
        return this._nota
    }

}