import React from 'react'
import ReactDOM from 'react-dom';
import {PersonGrid} from './components/PersonGrid';
import {VehicleGrid} from './components/VehicleGrid'

const Main = () => {
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


            <div className="content">
                <p id="welcome">Welcome</p>
            </div>

        </>

);
}

export default Main;
