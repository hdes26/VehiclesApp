import React from 'react';
import ReactDOM from 'react-dom';
import {PersonGrid} from './PersonGrid';

export const VehicleGrid = ()=>{
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
                
            </div>

        </>

);
}

export default VehicleGrid;


