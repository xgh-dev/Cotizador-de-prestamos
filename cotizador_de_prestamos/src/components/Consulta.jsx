import { useContext, useState } from "react";
import { contextoConsulta } from "./Contextos";

const Cotizacion = () => {
  const { consulta, setConsulta } = useContext(contextoConsulta);

  return (
    <>
      <div>
        <h2>Cotización</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolorum nam aspernatur sapiente laboriosam quaerat aliquam numquam, sed, facere ex aut! Minima nulla asperiores totam, odio quidem aliquam dolorum adipisci.</p>
      </div>
    </>
  );
};

export default Cotizacion;
