

export const SellVehicle = async(id)=>{

    const url = 'http://localhost:2000/api/vehicles/desvincular/';
    const res = await fetch(url, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
                "idPerson":id,
               
        })
    })
    const respuesta = await res.json()

    return respuesta;
    


}


