

export const UpdatePerson = (id,nombres,apellidos,nacimiento,identificacion,profesion,casado,ingresos)=>{

    const url = `http://localhost:2000/api/person/update/${id}`;
    fetch(url, {
        method:"PUT",
        body:JSON.stringify({
            "person":{
                "nombres":nombres,
                "apellidos":apellidos,
                "fecha_nacimiento":nacimiento,
                "identificacion":identificacion,
                "profesion_oficio":profesion,
               "casado":casado,
               "ingresos_mensuales":ingresos
               }
        })
    })
    


}