

export const DeleteVehicle= (id)=>{

    const url = `https://vehicles-app.herokuapp.com/api/vehicles/delete/${id}`;
    fetch(url, {
        method:"DELETE"
    })
    


}