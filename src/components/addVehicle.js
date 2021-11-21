import React, { useState } from 'react';
import Menu from './Menu'
const AddVehicle = () => {
    const [person, setperson] = useState();



    const handleTextPlaca = (event)=>{
        let myplaca= event.target.value
    }


    return (
        <>
            <Menu />

            <div className="form">
                
                    <input type="text" placeholder="Placa" onChange={handleTextPlaca}></input>
                    <input type="text" placeholder="Marca"></input>
                    <input type="text" placeholder="Modelo"></input>
                    <input type="number" placeholder="Numero de puertas"></input>
                    <input type="text" placeholder="Tipo de vehiculo"></input>
                    
                    <input type="submit" id="submit"></input>
                
            </div>




        </>
    )
}

export default AddVehicle;