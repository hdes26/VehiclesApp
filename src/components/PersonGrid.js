import React from 'react';
import ReactDOM from 'react-dom';
import { VehicleGrid } from './VehicleGrid';
import PersonFetch from '../hooks/useFetchPerson'
import PersonGridItem from './PersonGridItem'

export const PersonGrid = () => {


   const {data,loading} = PersonFetch();
   
    console.log(data)
   
   
    
   
    

    const divRoot = document.querySelector('#root');


    const personButton = () => {
        ReactDOM.render(<PersonGrid />, divRoot);
    }
    const vehicleButton = () => {

        ReactDOM.render(<VehicleGrid />, divRoot);
    }

    return (
        <>

            <nav>
                <a className="menuperson" onClick={personButton}>Person</a>
                <a className="menuvehicle" onClick={vehicleButton}>Vehicle</a>
            </nav>

            <div className="options">
                <a> Add person </a>
                <a> Sort by</a>
            </div>
            <div className="content">
                {loading ? <p className="animate__animated animate__flash">Loading...</p> :null}
                <div className="card-grid" >
                  {  
                        data.map(data=>(
                            <PersonGridItem
                            id={data._id}
                            nombres={data.nombres}
                            apellidos={data.apellidos}
                            fecha_nacimiento={data.fecha_nacimiento}
                            identificacion={data.identificacion}
                            profesion_oficio={data.profesion_oficio}
                            casado={data.casado}
                            ingresos_mensuales={data.ingresos_mensuales}
                            vehiculo={data.vehiculo}
                            key={data._id}
                            />
                        ))
                    }
                </div>
            </div>

        </>

    );
}

export default PersonGrid;


