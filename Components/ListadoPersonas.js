import React from 'react'
import { array, arrayOf, shape } from 'prop-types'
/*shape es una estructura para definir un objeto, como si fuera un sobPropType*/
import Persona from "./Components/Persona"
import { PersonaShape } from '../Shapes'

const listado =[
    {nombre:"Martin", apellido:"Esses", edad:35}
]

function ListadoPersonas(nombre, apellido, edad, mayorEdad, tipo) {
    return (
        <div>
            <h1>ListadoPersonas</h1>
            {ListadoPersonas.map(persona=>
                <Persona nombre={persona.nombre} apellido={persona.apellido} edad={persona.edad} />
            )}
        </div>
    )
}

ListadoPersonas.PropTypes = {
    personas:arrayOf(PersonaShape)
    /*Esto es para no estar repitiendo los propTypes */
}

export default ListadoPersonas