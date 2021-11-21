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
            <a className="menuperson" onClick={personButton}>Person</a>
            <a className="menuvehicle" onClick={vehicleButton}>Vehicle</a>
        </nav>

    )
}

export default Menu;