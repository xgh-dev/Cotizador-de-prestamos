import Cotizacion from './components/Consulta'
import Header from './components/header'
import './App.css'
import Formulario from './components/Forms'
import { useState } from 'react'
import { contextoConsulta } from './components/Contextos'

function App() {
  //asignamos los estados para poder pasarlos a los formularios
  const [consulta,setConsulta] = useState(false)

  //definir el componente que renderizara elementos de cumplir una condicion
  const component = consulta ? (<Cotizacion/>) : (<div className='cotizacion'><h2>Cotizacion:</h2></div>);
  
  //react no detecta cambios en elementos que no esten gestionados por un useState, por lo tanto el objetop en el cual pasaremos la informacion sera un estado y se pasara como prop
  const [cotizacionDatos,setCotizacionDatos] = useState({
    prestamo : 0,
    tiempo : '',
    interes : '',
    totalParaPagar : ''
  })

  return (
    <>
      <div className='main-container'>
        <Header />
        <contextoConsulta.Provider value = {{consulta,setConsulta,cotizacionDatos,setCotizacionDatos}}>
          <Formulario />
          {component}
        </contextoConsulta.Provider>
      </div>
    </>
  )
}

export default App
