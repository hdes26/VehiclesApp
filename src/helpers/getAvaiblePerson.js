
export const getPersonavailable = async () => {
    const url = 'http://localhost:2000/api/person/available/';
    const res = await fetch(url, {
        method: "GET"
    });
    const  Persons  = await res.json()
    

    return Persons;
}

