import React from 'react';
import ReactDOM from 'react-dom';
import VehiclesFetch from '../hooks/useFetchVehicles'
import VehicleGridItem from './VehicleGridItem'
import AddVehicle from './addVehicle'
import Menu from './Menu'


export const VehicleGrid = () => {


    const { data, loading } = VehiclesFetch();

    console.log(data)


    const divRoot = document.querySelector('#root');
    
    const addVehicle = () => {
        ReactDOM.render(<AddVehicle/>, divRoot);
    }
    const sortBy = () => {
        alert("Sort by")

    }


    return (
        <>

            <Menu />

            <div className="options">
                <a onClick={addVehicle}> Add vehicle </a>
                <a onClick={sortBy}> Sort by</a>
            </div>
            <div className="content">
                {loading ? <p className="animate__animated animate__flash">Loading...</p> : null}
                <div className="card-grid" >
                    {
                        data.map(data => (
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


