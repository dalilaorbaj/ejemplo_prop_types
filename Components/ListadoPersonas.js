import React from 'react'
import { array, arrayOf, shape } from 'prop-types'
/*shape es una estructura para definir un objeto, como si fuera un sobPropType*/
import Persona from "./Components/Persona"
import { PersonaShape } from '../Shapes'


function ListadoPersonas(personas) {
    return (
        <div>
            <h1>ListadoPersonas</h1>
            {ListadoPersonas.map((persona, index)=>
                <Persona persona={persona} key={index} />
            )}
        </div>
    )
}

ListadoPersonas.PropTypes = {
    personas:arrayOf(PersonaShape)
    /*Esto de PersonaShape es para no estar repitiendo los propTypes */
}

export default ListadoPersonas