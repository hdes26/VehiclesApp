import React, { useEffect, useState } from 'react'


const VehicleGridItem = ({ id, placa, marca, modelo, puertas, tipo, person}) => {
  const [state, setstate] = useState({
    data:[]
  })

  useEffect(() => {
    setstate({
      data:person
    })
  }, [])
    console.log(state.data)


  return (
    <>
      <div className="card animate__animated animate__fadeIn" id={`cardvehicle${id}`}>

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

