import React from 'react'
import Persona from './Components/Persona'
import ListadoPersonas from './Components/ListadoPersonas'

const listado =[
    {nombre:"Martin", apellido:"Esses", edad:35, tipo:
    "Adulto"}
]

function App(){
    <div className='App'>
        <ListadoPersonas personas={listado} />
    </div>
}

export default App;