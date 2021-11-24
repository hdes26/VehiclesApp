import React from 'react';
import ReactDOM from 'react-dom';
import {PersonGrid} from './PersonGrid'
import {VehicleGrid} from './VehicleGrid';

const Menu = () => {
    
    
    const divRoot = document.querySelector('#root');

    const personButton = () => {
        ReactDOM.render(<PersonGrid />, divRoot);
    }
    const vehicleButton = () => {

        ReactDOM.render(<VehicleGrid />, divRoot);
    }

    return (

        <nav>
            <p className="menuperson" onClick={personButton}>Person</p>
            <p className="menuvehicle" onClick={vehicleButton}>Vehicle</p>
        </nav>

    )
}

export default Menu;