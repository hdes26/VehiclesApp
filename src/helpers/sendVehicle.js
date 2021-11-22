
import swal from 'sweetalert';
import ReactDOM from 'react-dom';
import { VehicleGrid } from '../components/VehicleGrid';


 const sendVehicle = (placa, marca, modelo, puertas, tipo) => {
    const divRoot = document.querySelector('#root');

    const Id = genId()


    const url = 'http://localhost:2000/api/vehicles/create';
    fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            id:Id,
            placa:placa,
            marca:marca,
            modelo:modelo,
            puertas:puertas,
            tipo:tipo,

        })
    })
    .then(
        swal("Good job!", "You have created a new vehicle!", "success")
        .then((value)=>{
            console.log(value)
            setTimeout(() => {              
                ReactDOM.render(<VehicleGrid />, divRoot)
            }, 1000);
        }
        )
    )
    



}

const genId = ()=>{
    const id = parseInt(Math.random()*100000)
    return id;
}
export default sendVehicle;