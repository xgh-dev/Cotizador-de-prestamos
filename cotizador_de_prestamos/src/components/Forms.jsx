import { useState, useContext } from "react";
import { contextoConsulta } from "./contextos";

const Formulario = () => {
  //crear los hooks de control
  const [cantidad, SetCantidad] = useState(0);
  const [tiempo, SetTiempo] = useState("");
  const { consulta, setConsulta, cotizacionDatos, setCotizacionDatos } =
    useContext(contextoConsulta);

  /*
    const cotizacionDatos = {
        prestamo : '',
        tiempo : '',
        interes : '',
        totalParaPagar : ''
      }
    */

  //definir la funcion que haga los calculos
  const handleFormCotizacion = (e) => {
    e.preventDefault();
    if (cantidad !== 0 && tiempo !== "") {
      let interesPorPagar = 0;
      console.log("Prestamo en proceso");
      if (tiempo == "7") {
        interesPorPagar = 0.1;
        //console.log('interes:',Number(cantidad)+(Number(cantidad*.10)))
      } else if (tiempo == "14") {
        interesPorPagar = 0.15;
      } else if (tiempo == "23") {
        interesPorPagar = 0.17;
      } else if (tiempo == "30") {
        interesPorPagar = 0.2;
      } else if (tiempo == "60") {
        interesPorPagar = 0.4;
      } else if (tiempo == "90") {
        interesPorPagar = 0.6;
      }
      setCotizacionDatos({
        prestamo: cantidad,
        tiempo: tiempo,
        interes: interesPorPagar * 100,
        totalParaPagar: Number(cantidad) + Number(cantidad * interesPorPagar),
      });
      setConsulta(true);
    } else if (cantidad == 0 || tiempo == "") {
      console.log("No deje casillas sin rellenar");
    }
  };

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleFormCotizacion} className="form">
          <div className="column">
            <div>
              <label>Cantidad del prestamo</label>
              <input
                type="number"
                placeholder="$$$"
                onChange={(e) => SetCantidad(e.target.value)}
                value={cantidad}
              />
            </div>
            <div >
              <label>Tiempo para pagar</label>
              <select
                onChange={(e) => SetTiempo(e.target.value)}
                value={tiempo}
              >
                <option value="" disabled hidden>
                  Tiempo para pagar
                </option>
                <option value="7">7 días</option>
                <option value="14">14 días</option>
                <option value="23">23 días</option>
                <option value="30">30 días</option>
                <option value="60">2 meses</option>
                <option value="90">3 meses</option>
              </select>
            </div>
          </div>
          <div className="btnSubmit">
            <input type="submit" value="Consultar" />
          </div>
        </form>
        </div>
    </>
  );
};

export default Formulario;
