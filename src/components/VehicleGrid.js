import React from 'react';
import ReactDOM from 'react-dom';
import { PersonGrid} from './PersonGrid';
import VehiclesFetch from '../hooks/useFetchVehicles'
import VehicleGridItem from './VehicleGridItem'


export const VehicleGrid = ()=>{
    
    
    const {data,loading} = VehiclesFetch();
   
    console.log(data)
    
    
    const divRoot = document.querySelector('#root');

    const personButton = ()=>{
        ReactDOM.render(<PersonGrid />, divRoot);
    }
    const vehicleButton = ()=>{
        
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
                            <VehicleGridItem
                            id={data._id}
                            placa={data.placa}
                            marca={data.marca}
                            modelo={data.modelo}
                            puertas={data.puertas}
                            tipo={data.tipo}
                            person={data.person}
                            key={data._id}
                            />
                        ))
                    }
                </div>
            </div>

        </>

);
}

export default VehicleGrid;


