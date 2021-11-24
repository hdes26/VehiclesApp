import DataVehicleGrid from './dataVehicleGrid';
import ReactDOM from 'react-dom';
import { HistorialVehicleItem } from './historialVehicleItem';
import { historial } from '../helpers/historial';
import { useEffect, useState } from 'react';

const HistorialVehicle = ({ id, placa, marca, modelo, puertas, tipo, disponible }) => {
    const [data, setdata] = useState({
        hdata: []
    });


    useEffect(() => {

        historial(id)
            .then(res => {
                setdata({
                    hdata: res
                })
            })

    }, [])

    const { hdata: info } = data;

    const divRoot = document.querySelector('#root');
    const Back = () => {
        ReactDOM.render(<DataVehicleGrid
            id={id}
            placa={placa}
            marca={marca}
            modelo={modelo}
            puertas={puertas}
            tipo={tipo}
            disponible={disponible}
            key={id} />, divRoot)
    }
    return (
        <>


            <div className="content-historialvehicle">
                <div >
                    <img src="https://img.icons8.com/color/25/000000/back--v1.png" id="btn-back" onClick={Back} />
                </div>
                <h3 id="historialtitle">Historial</h3>
                {
                    info.map(data => (
                        <HistorialVehicleItem
                            id={data._id}
                            accion={data.accion}
                            nombres={data.idPerson.nombres}
                            apellidos={data.idPerson.apellidos}
                            nacimiento={data.idPerson.fecha_nacimiento}
                            identificacion={data.idPerson.identificacion}
                            profesion={data.idPerson.profesion_oficio}
                            casado={data.idPerson.casado}
                            ingresos={data.idPerson.ingresos_mensuales}
                            key={data._id}

                        />
                    ))
                }


            </div>


        </>
    );
}

export default HistorialVehicle;