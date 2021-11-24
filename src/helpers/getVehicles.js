
export const getVehicle = async () => {
    const url = 'https://vehicles-app.herokuapp.com/vehicles/';
    const res = await fetch(url, {
        method: "GET"
    });
    const { VehiclesApp } = await res.json()
    
     

    return VehiclesApp;
}

