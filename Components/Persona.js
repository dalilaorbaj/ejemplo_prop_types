import React from 'react'
import { PersonaShape } from '../Shapes/index';

function Persona(persona) {
    const {nombre, apellido, edad, mayorEdad, tipo} = persona;
    return (
        <div>
            <h1>{nombre}</h1>
            <h1>{apellido}</h1>
            <h3>{edad}</h3>
            <h3>{mayorEdad}</h3>
            <h3>{tipo}</h3>

        </div>
    )
}

Persona.PropTypes = {
    persona:PersonaShape
}

export default Persona