import React from 'react';
import ReactDOM from 'react-dom';
import { VehicleGrid } from './VehicleGrid';
import PersonFetch from '../hooks/useFetchPerson'

export const PersonGrid = () => {

    const{loading} = PersonFetch()
    console.log(loading)

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


            <div className="content">
                <div className="card-grid" ></div>
            </div>

        </>

    );
}

export default PersonGrid;


