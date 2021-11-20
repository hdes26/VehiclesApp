
export const getVehicle = async () => {
    const url = 'http://localhost:2000/api/vehicles/';
    const res = await fetch(url, {
        method: "GET"
    });
    const { VehiclesApp } = await res.json();
    const vehicles = VehiclesApp.map(data => {
        return {
            _id:data._id,
            id: data.id,
            placa: data.placa,
            marca: data.marca,
            modelo: data.modelo,
            puertas: data.puertas,
            tipo: data.tipo,
            person: data.person,

        }
    })

    return vehicles;
}