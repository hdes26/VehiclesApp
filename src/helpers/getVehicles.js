
export const getVehicle = async () => {
    const url = 'http://localhost:2000/api/vehicles/';
    const res = await fetch(url, {
        method: "GET"
    });
    const { VehiclesApp } = await res.json()
    
     

    return VehiclesApp;
}

