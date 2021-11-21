import React, { useState } from 'react';
import Menu from './Menu'
const AddPerson = () => {
    const [person, setperson] = useState();



    const handleTextNombre = (event)=>{
        let myname = event.target.value
    }
    const handleTextApellidos = (event)=>{
        let myapellido = event.target.value
    }
    const handleTextNacimiento = (event)=>{
        let mynacimiento = event.target.value
    }
    const handleTextIdentificacion = (event)=>{
        let myindentificacion = event.target.value
    }
    const handleTextProfesion = (event)=>{
        let myprofesion = event.target.value
    }
    const handleCasado = (event)=>{
        let mycasado = event.target.value
    }
    const handleTextIngresos = (event)=>{
        let myingresos = event.target.value
    }
    const handleTextVehiculo = (event)=>{
        let myvehiculo = event.target.value
    }


    return (
        <>
            <Menu />

            <div className="form">
                
                    <input type="text" placeholder="Nombre" onChange={handleTextNombre}></input>
                    <input type="text" placeholder="Escorcia" onChange={handleTextApellidos}></input>
                    <input type="date" onChange={handleTextNacimiento}></input>
                    <input type="number" placeholder="Identificacion" onChange={handleTextIdentificacion}></input>
                    <input type="text" placeholder="Profesion u oficio" onChange={handleTextProfesion}></input>
                    <div id="marry">
                        <p>Casado(a)?    </p>
                        
                        
                        <p>si</p>
                        <input type="checkbox"></input>
                        
                        <p>no</p>
                        <input type="checkbox"></input>

                    </div>

                    
                    <input type="number" placeholder="Ingresos mensuales" onChange={handleTextIngresos}></input>
                    <input type="text" placeholder="Vehiculo actual" onChange={handleTextVehiculo}></input>
                    <input type="submit" id="submit"></input>
                
            </div>




        </>
    )
}

export default AddPerson;