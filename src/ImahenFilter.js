import alimentacion from "./assets/images/alimentacion.svg";
import salud from "./assets/images/salud.svg";
import otros from "./assets/images/otros.svg";
import transporte from "./assets/images/transporte.svg";
import utilidades from "./assets/images/utilidades.svg";

import {  IconoTema } from "./Components/UI/Index";
import React from "react";

/**Esto no es un componente sino una funcion */
export default (type)=>{
    const Images ={
        Restaurante: <IconoTema src={alimentacion} alt="Restaurante"/>,
        Salud: <IconoTema src={salud} alt="Salud"/>,
        Transporte: <IconoTema src={transporte} alt="Transporte"/>,
        Utilidades: <IconoTema src={utilidades} alt="Utilidades"/>,
        default:<IconoTema src={otros} alt="Otros"/>
    }
    return Images[type] || Images['default'];
    /**RETORNAMOS SOLO LA IMAGEN QE NESESITAMOS SOLO CON EL TIPO
     * y donde no encuentre el tipo qe desea, retorna la image de otros porqe la declaramos como default
     */
}