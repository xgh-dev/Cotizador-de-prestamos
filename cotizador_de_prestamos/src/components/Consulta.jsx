import { useContext, useState } from "react";
import { contextoConsulta } from "./Contextos";

const Cotizacion = () => {
  const { consulta, setConsulta,cotizacionDatos,setCotizacionDatos} = useContext(contextoConsulta);

  return (
    <>
      <div className="cotizacion">
        <h2 className="cotizacionContenido">Cotización:</h2>
        <p className="cotizacionContenido">Monto cotizado: {cotizacionDatos.prestamo} $</p>
        <p className="cotizacionContenido">Tiempo para pagar: {cotizacionDatos.tiempo} días</p>
        <p className="cotizacionContenido" >Interes: {cotizacionDatos.interes} %</p>
        <p className="cotizacionContenido">Total a pagar: {cotizacionDatos.totalParaPagar} $</p>
      </div>
    </>
  );
};

export default Cotizacion;
