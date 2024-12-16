import { useState,useContext  } from "react";
import { contextoConsulta } from "./Contextos";

const Formulario = () => {
    //crear los hooks de control
    const [cantidad,SetCantidad] = useState(0)
    const [tiempo,SetTiempo] = useState('')
    const {consulta,setConsulta} = useContext(contextoConsulta)

    //definir la funcion que haga los calculos
    const handleFormCotizacion = (e) => {
        e.preventDefault();
        if (cantidad !== 0 && tiempo !== ''){
            console.log('Prestamo en proceso')
            if (tiempo !== ''){
                console.log('interes:',Number(cantidad)+(Number(cantidad*.10)))
                setConsulta(true)
            }

        } else if (cantidad == 0 || tiempo == ''){
           console.log('No deje casillas sin rellenar')
        }
    }

    return(
        <>
            <div>
                <form action="" onSubmit={handleFormCotizacion}>
                    <div>
                    <p>Ingrese la cantidad del prestamo</p>
                    <input type="number" placeholder="$$$" onChange={ e => SetCantidad(e.target.value)} value={cantidad}/>
                    </div>
                    <div>
                        <p>Seleccione el tiempo para pagar</p>
                        <select onChange={ e => SetTiempo(e.target.value)} value={tiempo}>
                            <option value="" disabled hidden>Tiempo para pagar</option>
                            <option value="7" >7 días</option>
                            <option value="14">14 días</option>
                            <option value="23">23 días</option>
                            <option value="30">30 días</option>
                            <option value="60">60 meses</option>
                            <option value="90">90 meses</option>
                        </select>
                    </div>
                    <input type="submit" value='Consultar'/>
                </form>
            </div>
        </>
    )
}

export default Formulario;