import VehicleGrid from './VehicleGrid'
import ReactDOM from 'react-dom';
import swal from 'sweetalert';
import { DeleteVehicle } from '../helpers/deleteVehicle';
import { UpdateVehicle } from '../helpers/updateVehicle';
import HistorialVehicle from './historialVehicle'
import { useState } from 'react';
import AssignVehicle from './assignVehicle';

const DataVehicleGrid = ({ id, placa, marca, modelo, puertas, tipo, disponible }) => {
    const [theplaca, setplaca] = useState(placa);
    const [themarca, setmarca] = useState(marca);
    const [themodelo, setmodelo] = useState(modelo);
    const [thepuertas, setpuertas] = useState(puertas);
    const [thetipo, settipo] = useState(tipo)


    const divRoot = document.querySelector('#root');
    const Back = () => {
        ReactDOM.render(<VehicleGrid />, divRoot);
    }


    const btnEditar = () => {


        swal({
            title: "Are you sure?",
            text: "Edit person",
            icon: "info",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    UpdateVehicle(id, theplaca, themarca, themodelo, thepuertas, thetipo)
                    swal("Poof! Vehicle  has been update!", {
                        icon: "success",
                    })
                } else {
                    swal("Your vehicle is safe!");
                }
            });
    }
    const btnBorrar = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this person!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    DeleteVehicle(id);
                    swal("Poof! Vehicle  has been deleted!", {
                        icon: "success",
                    }).then(
                        setTimeout(() => {

                            ReactDOM.render(<VehicleGrid />, divRoot)
                        }, 1000)
                    )
                } else {
                    swal("Your person is safe!");
                }
            });
    }
    const btnHistorial = () => {
        ReactDOM.render(<HistorialVehicle
            id={id}
            placa={placa}
            marca={marca}
            modelo={modelo}
            puertas={puertas}
            tipo={tipo}
            disponible={disponible}
            key={id} />,
            divRoot);
    }
    const btnAsignar = () => {
        if (disponible) {

            ReactDOM.render(<AssignVehicle
                id={id}
                placa={placa}
                marca={marca}
                modelo={modelo}
                puertas={puertas}
                tipo={tipo}
                disponible={disponible}
            />, divRoot)
        } else {
            swal("Sorry!", "Este vehiculo ya esta siendo usado!", "error");

        }
    }

    const handleTextPlaca = (event) => {
        let myplaca = event.target.value;
        setplaca(myplaca);
    }
    const handleTextMarca = (event) => {
        let mymarca = event.target.value;
        setmarca(mymarca);
    }
    const handleTextModelo = (event) => {
        let mymodelo = event.target.value;
        setmodelo(mymodelo);
    }
    const handleTextPuertas = (event) => {
        let mypuertas = event.target.value;
        setpuertas(mypuertas);
    }
    const handleTextTipo = (event) => {
        let mytipo = event.target.value;
        settipo(mytipo);
    }




    return (
        <>

            <div className="content-vehicle">
                <div className="data">
                    <div >
                        <img src="https://img.icons8.com/color/25/000000/back--v1.png" id="btn-back" onClick={Back} />
                    </div>
                    <br /><br />
                    <div>
                        <p>Placa : </p>
                        <input type="text" value={theplaca} onChange={handleTextPlaca} />
                    </div>
                    <div>
                        <p>Marca : </p>
                        <input type="text" value={themarca} onChange={handleTextMarca} />
                    </div>
                    <div>
                        <p>Modelo : </p>
                        <input type="text" value={themodelo} onChange={handleTextModelo} />

                    </div>
                    <div>
                        <p>Puertas : </p>
                        <input type="number" value={thepuertas} onChange={handleTextPuertas} />


                    </div>
                    <div>
                        <p>Tipo : </p>
                        <input type="text" value={thetipo} onChange={handleTextTipo} />


                    </div>
                </div>

                <div className="butons">
                    <input type="submit" value="ASIGNAR" id="btn-asignar" onClick={btnAsignar} ></input>
                    <input type="submit" value="EDITAR" id="btn-editar" onClick={btnEditar} ></input>
                    <input type="submit" value="HISTORIAL" id="btn-historial" onClick={btnHistorial} ></input>
                    <input type="submit" value="BORRAR" id="btn-borrar" onClick={btnBorrar} ></input>
                </div>
            </div>





        </>
    );
}


export default DataVehicleGrid;