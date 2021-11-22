import React, { useEffect, useState } from 'react';
import DataPersonGrid from './dataPersonGrid';
import ReactDOM from 'react-dom';



const PersonGridItem = ({ id, nombres, apellidos, fecha_nacimiento, identificacion, profesion_oficio, casado, ingresos_mensuales, vehiculo }) => {


  const [state, setstate] = useState({
    data: []
  })

  useEffect(() => {
    setstate({
      data: vehiculo
    })
  }, [])
  console.log(state.data)

const divRoot = document.querySelector('#root');
  const personGridItem = ()=>{

    ReactDOM.render(<DataPersonGrid id={id} nombres={nombres} apellidos={apellidos} 
      nacimiento = {fecha_nacimiento} identificacion = {identificacion} 
      profesion = {profesion_oficio} casado = {casado} ingresos ={ingresos_mensuales}
       />, divRoot);
  }

  
  return (
    <>
      <div className="card animate__animated animate__fadeIn" id={`cardperson${id}`} onClick={personGridItem}>

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

