import DataVehicleGrid from './dataVehicleGrid';
import ReactDOM from 'react-dom';
import HistorialVehicleItem from './historialVehicleItem';

const HistorialVehicle = ({ id, placa, marca, modelo, puertas, tipo }) => {



    const divRoot = document.querySelector('#root');
    const vehicleGrid = () => {
        ReactDOM.render(<DataVehicleGrid
            id={id}
            placa={placa}
            marca={marca}
            modelo={modelo}
            puertas={puertas}
            tipo={tipo}
            key={id} />, divRoot)
    }
    return (
        <>


            <div className="content-historialvehicle">
                <div >
                    <img src="https://img.icons8.com/color/25/000000/back--v1.png" id="btn-back" onClick={vehicleGrid} />
                </div>
                <h3 id="historialtitle">Historial</h3>
                <HistorialVehicleItem />


            </div>


        </>
    );
}

export default HistorialVehicle;