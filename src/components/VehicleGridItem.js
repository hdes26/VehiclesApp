import ReactDOM from 'react-dom';
import React from 'react'
import DataVehicleGrid from './dataVehicleGrid'


const VehicleGridItem = ({ id, placa, marca, modelo, puertas, tipo, disponible }) => {
  let mostrardisponible;
  if (disponible) {
    mostrardisponible = "Disponible"
  }else{
    mostrardisponible = " No disponible"

  }
  


  const divRoot = document.querySelector('#root');

  const dataVehicleGrid = () => {

    ReactDOM.render(<DataVehicleGrid id={id} placa={placa} marca={marca} modelo={modelo} puertas={puertas} tipo={tipo} disponible={disponible} />, divRoot);
  }

  return (
    <>
      <div className="card animate__animated animate__fadeIn" id={`cardvehicle${id}`} onClick={dataVehicleGrid}>

        <p> {`${placa} `} </p>
        <p> {`${marca} `}  </p>
        <br />
        <p> {`${modelo} `}  </p>
        <br />
        <p> {`${tipo} `}  </p>
        <br />
        <p id="dipovehicle"> {`${mostrardisponible } `}  </p>

      </div>
    </>
  )

}

export default VehicleGridItem;

