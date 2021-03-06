import React from 'react';
import DataPersonGrid from './dataPersonGrid';
import ReactDOM from 'react-dom';



const PersonGridItem = ({ id, nombres, apellidos, fecha_nacimiento, identificacion, profesion_oficio, casado, ingresos_mensuales, vehiculo }) => {
  console.log(vehiculo)
  let mostrardisponible;
  if (vehiculo!==null) {
    mostrardisponible = "Tiene vehiculo"
  }else{
    mostrardisponible = "No tiene Vehiculo"

  }



  const divRoot = document.querySelector('#root');
  const dataPersonGrid = () => {

    ReactDOM.render(<DataPersonGrid id={id} nombres={nombres} apellidos={apellidos}
      nacimiento={fecha_nacimiento} identificacion={identificacion}
      profesion={profesion_oficio} casado={casado} ingresos={ingresos_mensuales} vehiculo= {vehiculo}
    />, divRoot);
  }


  return (
    <>
      <div className="card animate__animated animate__fadeIn" id={`cardperson${id}`} onClick={dataPersonGrid}>

        <p> {`${nombres} `} </p>
        <p> {`${apellidos} `}  </p>
        <br />
        <p> {`${identificacion} `}  </p>
        <br />
        <p> {`${profesion_oficio} `}  </p>
        <p id="dipovehicle"> {`${mostrardisponible} `}  </p>

      </div>
    </>
  )

}

export default PersonGridItem;

