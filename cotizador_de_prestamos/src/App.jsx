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
  const component = consulta ? (<Cotizacion/>) : (<h2>Cotizacion</h2>);
  
  //aqui definiremos el objeto que guardara los datos de las consutlas
  const cotizacionDatos = {
    prestamo : '',
    tiempo : '',
    interes : '',
    totalParaPagar : ''
  }

  return (
    <>
      <div>
        <Header />
        <contextoConsulta.Provider value = {{consulta,setConsulta,cotizacionDatos}}>
          <Formulario />
          {component}
        </contextoConsulta.Provider>
      </div>
    </>
  )
}

export default App
