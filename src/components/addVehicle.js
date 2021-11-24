import React, { useState } from 'react';
import Menu from './Menu';
import sendVehicle from '../helpers/sendVehicle';
import VehicleGrid from './VehicleGrid';
import ReactDOM from 'react-dom';
const AddVehicle = () => {
    const [placa, setplaca] = useState();
    const [marca, setmarca] = useState();
    const [modelo, setmodelo] = useState();
    const [puertas, setpuertas] = useState();
    const [tipo, settipo] = useState();


    const divRoot = document.querySelector('#root');

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
    const Back = ()=>{
        ReactDOM.render(<VehicleGrid/>, divRoot);
    }


    return (
        <>
            <Menu />

            <div className="form">
            <div className="back">
                    <img src="https://img.icons8.com/color/25/000000/back--v1.png" id="btn-back" onClick={Back} alt="imgback" />
                </div>
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