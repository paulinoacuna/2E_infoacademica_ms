//read only

module.exports = class Calificacion {
    constructor(nombre,porcentaje,nota){
        this._nombre = nombre //string
        this._porcentaje = porcentaje //number
        this._nota = nota;  //object
    }

    get nombre(){
        return this._nombre
    }

    get porcentaje(){
            return this._porcentaje
    }

    get nota(){
        // {'jlizarazoa': 5,
        // 'jumorap': 4.5,
        //  'juan': 3
        // }

        return this._nota
    }

}
