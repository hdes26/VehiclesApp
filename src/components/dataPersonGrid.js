import { PersonGrid } from '../components/PersonGrid';
import ReactDOM from 'react-dom';
import swal from 'sweetalert';
import { DeletePerson } from '../helpers/deletePerson'
import { UpdatePerson } from '../helpers/updatePerson';
import { useState } from 'react';


const DataPersonGrid = ({ id, nombres, apellidos, nacimiento, identificacion, profesion, casado, ingresos, vehiculo }) => {

    const [name, setname] = useState(nombres);
    const [lastname, setlastname] = useState(apellidos);
    const [fechanacimiento, setfechanacimiento] = useState(nacimiento);
    const [identification, setidentification] = useState(identificacion);
    const [profession, setprofession] = useState(profesion);
    const [marry, setmarry] = useState(casado);
    const [income, setincome] = useState(ingresos);





    const divRoot = document.querySelector('#root');

    

    
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
                    UpdatePerson(id, name, lastname, fechanacimiento, identification, profession, marry, income)
                    swal("Poof! Person  has been update!", {
                        icon: "success",
                    })
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
                        setTimeout(() => {

                            ReactDOM.render(<PersonGrid />, divRoot)
                        }, 1000)
                    )
                } else {
                    swal("Your person is safe!");
                }
            });
    }


    const handleTextNombre = (event) => {
        let myname = event.target.value;
        setname(myname);
    }
    const handleTextApellido = (event) => {
        let myapellido = event.target.value;
        setlastname(myapellido);

    }
    const handleTextNacimiento = (event) => {
        let mynacimiento = event.target.value;
        setfechanacimiento(mynacimiento);
    }
    const handleTextIdentificacion = (event) => {
        let myidentificacion = event.target.value;
        setidentification(myidentificacion);
    }
    const handleTextprofesion = (event) => {
        let myprofesion = event.target.value;
        setprofession(myprofesion);
    }
    const handleTextCasado = (event) => {
        let mycasado = event.target.value;        
        setmarry(mycasado);
    }
    const handleTextIngresos = (event) => {
        let myingresos = event.target.value;
        setincome(myingresos);
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
                        <input type="text" value={name} onChange={handleTextNombre} />
                    </div>
                    <div>
                        <p>Apellidos : </p>
                        <input type="text" value={lastname} onChange={handleTextApellido} />
                    </div>
                    <div>
                        <p>Fecha de nacimiento : </p>
                        <input type="date" value={fechanacimiento} onChange={handleTextNacimiento} />

                    </div>
                    <div>
                        <p>Identificacion : </p>
                        <input type="text" value={identification} onChange={handleTextIdentificacion} />


                    </div>
                    <div>
                        <p>Profesion u oficio : </p>
                        <input type="text" value={profession} onChange={handleTextprofesion} />


                    </div>
                    <div>
                        <p>Casado : </p>
                        <input type="text" value={marry} onChange={handleTextCasado} />

                    </div>
                    <div>
                        <p>Ingresos mensuales : </p>
                        <input type="text" value={income} onChange={handleTextIngresos} />

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