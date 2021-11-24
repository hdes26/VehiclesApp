

export const AsignVehicle = async(idperson,idvehicle)=>{
    console.log(idperson,idvehicle);

    const url = 'http://localhost:2000/api/vehicles/assign/';
    const res = await fetch(url, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
                "idPerson":idperson,
                "idVehicle":idvehicle,
               
        })
    })
    const respuesta = await res.json()

    return respuesta;
    


}


