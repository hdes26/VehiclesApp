
export const getPerson = async () => {
    const url = 'http://localhost:2000/api/person/';
    const res = await fetch(url, {
        method: "GET"
    });
    const { PersonsApp } = await res.json();
    const users = PersonsApp.map(data => {
        return {
            _id:data._id,
            id: data.id,
            nombre: data.nombres,
            apellidos: data.apellidos,
            fecha_nacimiento: data.fecha_nacimiento,
            identificacion: data.identificacion,
            profesion_oficio: data.profesion_oficio,
            casado: data.casado,
            ingresos_mensuales: data.ingresos_mensuales,
            vehiculo: data.vehiculo
        }
    })

    return users;
}