import DataVehicleGrid from "./dataVehicleGrid";
import { getPersonavailable } from '../helpers/getAvaiblePerson'
import { useEffect, useState } from "react";
import { AssignVehicleItem } from "./assignVehicleItem";
import ReactDOM from 'react-dom';

const AssignVehicle = ({ id, placa, marca, modelo, puertas, tipo,disponible }) => {
    console.log(id)
    const [state, setstate] = useState({
        data: []
    })
    useEffect(() => {

        getPersonavailable()
            .then(res => {
                setstate({
                    data: res
                })
            }
            )
    }, [])


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

        />, divRoot)
    }


    return (
        <>
            <div className="content-historialvehicle">
                <div >
                    <img src="https://img.icons8.com/color/25/000000/back--v1.png" id="btn-back" onClick={Back} />
                </div>
                <h3 id="historialtitle">Asignar vehiculo</h3>
                {
                    state.data.map(data => (
                        <AssignVehicleItem
                            idvehicle={id}
                            idperson={data._id}
                            key={data._id}
                            nombres={data.nombres}
                            apellidos={data.apellidos}
                            identificacion={data.identificacion}
                            profesion={data.profesion_oficio}
                            ingresos={data.ingresos_mensuales}
                        />
                    ))
                }

            </div>
        </>
    );
}

export default AssignVehicle;