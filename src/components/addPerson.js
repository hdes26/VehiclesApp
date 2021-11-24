import React, { useState } from 'react';
import { sendPerson } from '../helpers/sendPerson';
import Menu from './Menu';
import {PersonGrid} from './PersonGrid';
import ReactDOM from 'react-dom';

const AddPerson = () => {
    const [nombres, setnombres] = useState();
    const [apellidos, setapellidos] = useState();
    const [fnacimiento, setfnacimiento] = useState();
    const [identificacion, setidentificacion] = useState();
    const [profesion, setprofesion] = useState();
    const [casado, setcasado] = useState();
    const [ingresos, setingresos] = useState();

    const divRoot = document.querySelector('#root');



    

    const Back = ()=>{
        ReactDOM.render(<PersonGrid />, divRoot);
    }



    const handleTextNombre = (event) => {
        let myname = event.target.value
        setnombres(myname);
    }
    const handleTextApellidos = (event) => {
        let myapellido = event.target.value
        setapellidos(myapellido);
    }

    const handleTextNacimiento = (event) => {
        let mynacimiento = event.target.value;
        setfnacimiento(mynacimiento);

    }

    const handleTextIdentificacion = (event) => {
        let myindentificacion = event.target.value;
        setidentificacion(myindentificacion);
    }

    const handleTextProfesion = (event) => {
        let myprofesion = event.target.value;
        setprofesion(myprofesion)
    }
    const handleCasado = () => {
        const checkboxsi = document.querySelector('#casadosi');
        const checkboxno = document.querySelector('#casadono');
        if (!(checkboxsi.checked && checkboxno.checked)) {

            if (checkboxsi.checked) {
                checkboxsi.setAttribute('checked', '');
                checkboxno.removeAttribute('checked');
                console.log(checkboxsi)
                setcasado(true);
            } else if (checkboxno.checked) {
                checkboxno.setAttribute('checked', '');
                checkboxsi.removeAttribute('checked');
                console.log(checkboxno);
                setcasado(false);
            }
            else if (!checkboxsi.checked) {
                checkboxsi.removeAttribute('checked');
                setcasado(null);
            }
            else if (!checkboxno.checked) {
                checkboxno.removeAttribute('checked');
                setcasado(null);
            }
        } else {
            alert("Por favor seleccione solo una opcion");
            checkboxno.removeAttribute('checked');
            checkboxsi.removeAttribute('checked');
        }

    }
    const handleTextIngresos = (event) => {
        let myingresos = event.target.value;
        setingresos(myingresos)
    }
    /* const handleTextVehiculo = (event)=>{
        let myvehiculo = event.target.value
    } */

    const submit = () => {
        if (nombres, apellidos, fnacimiento, identificacion, profesion, casado, ingresos) {
            sendPerson(nombres, apellidos, fnacimiento, identificacion, profesion, casado, ingresos);
        } else {

        }

    }


    return (
        <>
            <Menu />

            <div className="form">
                <div className="back">
                    <img src="https://img.icons8.com/color/25/000000/back--v1.png" id="btn-back" onClick={Back} alt="imgback" />
                </div>


                <input type="text" placeholder="Nombre" onChange={handleTextNombre} required></input>
                <input type="text" placeholder="Apellidos" onChange={handleTextApellidos} required></input>
                <input type="date" onChange={handleTextNacimiento} required></input>
                <input type="number" placeholder="Identificacion" onChange={handleTextIdentificacion} required></input>
                <input type="text" placeholder="Profesion u oficio" onChange={handleTextProfesion} required></input>
                <div id="marry">
                    <p>Casado(a)?    </p>


                    <p>si</p>
                    <input type="checkbox" onClick={handleCasado} id="casadosi" ></input>

                    <p>no</p>
                    <input type="checkbox" id="casadono" onClick={handleCasado} ></input>

                </div>


                <input type="number" placeholder="Ingresos mensuales" onChange={handleTextIngresos}></input>
                {/*                     <input type="radio" placeholder="Vehiculo actual" onChange={handleTextVehiculo}></input>
 */}                    <input type="submit" id="submit" onClick={submit}></input>

            </div>




        </>
    )
}


export default AddPerson;