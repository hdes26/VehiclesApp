import { PersonGrid } from '../components/PersonGrid';
import ReactDOM from 'react-dom';
import swal from 'sweetalert';
import { DeletePerson } from '../helpers/deletePerson'
import { UpdatePerson } from '../helpers/updatePerson';
import { useState } from 'react';


const DataPersonGrid = ({ id, nombres, apellidos, nacimiento, identificacion, profesion, casado, ingresos, vehiculo }) => {

    const [name, setname] = useState();
    const [lastname, setlastname] = useState();
    const [fechanacimiento, setfechanacimiento] = useState();
    const [identification, setidentification] = useState();
    const [profession, setprofession] = useState();
    const [marry, setmarry] = useState();
    const [income, setincome] = useState();
    






    console.log(id);
    const divRoot = document.querySelector('#root');
    let _casado = '';
    if (casado) {
        _casado = "Si";
    } else {
        _casado = "No";
    }


    const personGrid = () => {
        ReactDOM.render(<PersonGrid />, divRoot)
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
                    DeletePerson(id);
                    swal("Poof! Person  has been update!", {
                        icon: "success",
                    }).then(
                        UpdatePerson(id, nombres, apellidos, nacimiento, identificacion, profesion, casado, ingresos)

                    )
                } else {
                    swal("Your person is safe!");
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
                    DeletePerson(id);
                    swal("Poof! Person  has been deleted!", {
                        icon: "success",
                    }).then(
                        ReactDOM.render(<PersonGrid />, divRoot)
                    )
                } else {
                    swal("Your person is safe!");
                }
            });
    }


    const handleTextNombre = ()=>{
        
    }
    const handleTextApellido = ()=>{

    }
    const handleTextNacimiento = ()=>{

    }
    const handleTextIdentificacion = ()=>{

    }
    const handleTextprofesion = ()=>{

    }
    const handleTextCasado = ()=>{

    }
    const handleTextIngresos = ()=>{

    }


    return (
        <>
            <div className="content-person">

                <div className="data">
                    <div >
                        <img src="https://img.icons8.com/color/25/000000/back--v1.png" id="btn-back" onClick={personGrid} />
                    </div>
                    <div>
                        <p>Nombres : </p>
                        <input type="text" value={nombres} />
                    </div>
                    <div>
                        <p>Apellidos : </p>
                        <input type="text" value={apellidos} />
                    </div>
                    <div>
                        <p>Fecha de nacimiento : </p>
                        <input type="date" value={nacimiento} />

                    </div>
                    <div>
                        <p>Identificacion : </p>
                        <input type="text" value={identificacion} />


                    </div>
                    <div>
                        <p>Profesion u oficio : </p>
                        <input type="text" value={profesion} />


                    </div>
                    <div>
                        <p>Casado : </p>
                        <input type="text" value={_casado} />

                    </div>
                    <div>
                        <p>Ingresos mensuales : </p>
                        <input type="text" value={ingresos} />

                    </div>
                </div>
                <div className="butons">
                    <input type="submit" value="EDITAR" id="btn-editar" onClick={btnEditar} ></input>
                    <input type="submit" value="BORRAR" id="btn-borrar" onClick={btnBorrar} ></input>
                </div>


            </div>


        </>
    )
}


export default DataPersonGrid;