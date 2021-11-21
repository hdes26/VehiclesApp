import React, { useState } from 'react';
import Menu from './Menu'
import sendVehicle from '../helpers/sendVehicle'
const AddVehicle = () => {
    const [placa, setplaca] = useState();
    const [marca, setmarca] = useState();
    const [modelo, setmodelo] = useState();
    const [puertas, setpuertas] = useState();
    const [tipo, settipo] = useState();



    const handleTextPlaca = (event)=>{
        let myplaca= event.target.value;
        setplaca(myplaca);
    }
    const handleTextMarca= (event)=>{
        let mymarca= event.target.value;
        setmarca(mymarca);
    }
    const handleTextModelo= (event)=>{
        let mymodelo= event.target.value;
        setmodelo(mymodelo);
    }
    const handleTextPuertas= (event)=>{
        let mypuertas= event.target.value;
        setpuertas(mypuertas);
    }
    const handleTextTipo= (event)=>{
        let mytipo= event.target.value;
        settipo(mytipo);
    }

    const submit = () => {
        if (placa,marca,modelo,puertas,tipo) {
            sendVehicle(placa,marca,modelo,puertas,tipo);
        } else {

        }
        
    } 


    return (
        <>
            <Menu />

            <div className="form">
                
                    <input type="text" placeholder="Placa" onChange={handleTextPlaca}></input>
                    <input type="text" placeholder="Marca" onChange={handleTextMarca}></input>
                    <input type="text" placeholder="Modelo" onChange={handleTextModelo}></input>
                    <input type="number" placeholder="Numero de puertas" onChange={handleTextPuertas}></input>
                    <input type="text" placeholder="Tipo de vehiculo" onChange={handleTextTipo}></input>
                    
                    <input type="submit" id="submit" onClick={submit}></input>
                
            </div>




        </>
    )
}

export default AddVehicle;