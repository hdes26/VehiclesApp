import React, { useEffect, useState } from 'react'


const PersonGridItem = ({ id, nombres, apellidos, fecha_nacimiento, identificacion, profesion_oficio, casado, ingresos_mensuales,vehiculo }) => {
  const [state, setstate] = useState({
    data:[]
  })

  useEffect(() => {
    setstate({
      data:vehiculo
    })
  }, [])
    console.log(state.data)


  return (
    <>
      <div className="card animate__animated animate__fadeIn" id={`cardperson${id}`}>

        <p> {`${nombres} `} </p>
        <p> {`${apellidos} `}  </p>
        <br />
        <p> {`${identificacion} `}  </p>
        <br />
        <p> {`${profesion_oficio} `}  </p>

      </div>
    </>
  )

}

export default PersonGridItem;

