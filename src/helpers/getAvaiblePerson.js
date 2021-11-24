
export const getPersonavailable = async () => {
    const url = 'https://vehicles-app.herokuapp.com/api/person/available/';
    const res = await fetch(url, {
        method: "GET"
    });
    const  Persons  = await res.json()
    

    return Persons;
}

