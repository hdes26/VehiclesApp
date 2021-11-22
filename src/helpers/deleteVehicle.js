

export const DeleteVehicle= (id)=>{

    const url = `http://localhost:2000/api/vehicles/delete/${id}`;
    fetch(url, {
        method:"DELETE"
    })
    


}