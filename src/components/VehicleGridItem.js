import ReactDOM from 'react-dom';
import React, { useEffect, useState } from 'react'
import DataVehicleGrid from './dataVehicleGrid'


const VehicleGridItem = ({ id, placa, marca, modelo, puertas, tipo, person }) => {
  const [state, setstate] = useState({
    data: []
  })

  useEffect(() => {
    setstate({
      data: person
    })
  }, [])


  const divRoot = document.querySelector('#root');

  const dataVehicleGrid = () => {

    ReactDOM.render(<DataVehicleGrid id={id} placa={placa} marca={marca} modelo={modelo} puertas={puertas} tipo={tipo} />, divRoot);
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

      </div>
    </>
  )

}

export default VehicleGridItem;

