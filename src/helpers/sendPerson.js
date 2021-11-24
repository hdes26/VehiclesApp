import swal from 'sweetalert';
import { PersonGrid } from '../components/PersonGrid';
import ReactDOM from 'react-dom';


export const sendPerson = (nombres, apellidos, fecha_nacimiento, identificacion, profesion, casado, ingresos_mensuales) => {
    
    const divRoot = document.querySelector('#root');
    const Id = genId()


    const url = 'https://vehicles-app.herokuapp.com/api/person/create/';
    fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            id: Id,
            nombres: nombres,
            apellidos: apellidos,
            fecha_nacimiento: fecha_nacimiento,
            identificacion: identificacion,
            profesion_oficio: profesion,
            casado: casado,
            ingresos_mensuales: ingresos_mensuales,
            vehiculo:null
        })
    })
        .then(

            swal("Good job!", "You have created a new person!", "success")
                .then(() => {
                    ReactDOM.render(<PersonGrid />, divRoot)
                }
                )

        )




}

const genId = () => {
    const id = parseInt(Math.random() * 100000)
    return id;
}