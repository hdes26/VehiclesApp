

export const UpdateVehicle = (id,placa,marca,modelo,puertas,tipo)=>{

    const url = `http://localhost:2000/api/vehicles/update/${id}`;
    fetch(url, {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
                "placa":placa,
                "marca":marca,
                "modelo":modelo,
                "puertas":puertas,
                "tipo":tipo,
               
        })
    })
    


}