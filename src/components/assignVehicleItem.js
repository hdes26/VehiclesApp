import swal from 'sweetalert';
import { AsignVehicle } from '../helpers/asignVehicle';
import VehicleGrid from './VehicleGrid';
import ReactDOM from 'react-dom';


export const AssignVehicleItem = ({ idvehicle, idperson, nombres, apellidos, identificacion, profesion, ingresos }) => {

    const divRoot = document.querySelector('#root');


    const confirmarSeleccion = () => {
        swal({
            title: "Asignar vehiculo?",
            text: "Asignar Vehiculo a esta persona",
            icon: "info",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    AsignVehicle(idperson, idvehicle)
                        .then(res => { console.log(res) })
                    swal("Poof! Vehiculo ha sido asignado!", {
                        icon: "success",
                    })
                    
                } else {
                    swal("No has asignado veiculo!");
                }
            });
    }


    return (
        <>

            <div className="asignitem" >
                <div className="fl" id={idperson} onClick={confirmarSeleccion}>
                    <div className="asigndata">
                        <div>
                            <p id="ptitleasign">Id :</p>
                            <p>{identificacion}</p>

                        </div>
                        <div>
                            <p id="ptitleasign">Nombres :</p>
                            <p>{nombres}</p>

                        </div>
                        <div>
                            <p id="ptitleasign">Apellidos :</p>
                            <p>{apellidos}</p>

                        </div>
                        <div>
                            <p id="ptitleasign">Profesion :</p>
                            <p>{profesion}</p>

                        </div>


                    </div>

                </div>


            </div>


        </>
    )
}


