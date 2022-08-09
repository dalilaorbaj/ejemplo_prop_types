import {bool, number, shape, string, oneOf} from 'prop-types'

/*Este shape lo uso para definir la estructura*/

export const PersonaShape = shape({
    nombre:string.isRequired,
    apellido: string, 
    edad: number, 
    mayorEdad: bool, 
    tipo: oneOf(['Menor', 'Adulto']).isRequired
})