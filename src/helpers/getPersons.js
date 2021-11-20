
export const getPerson = async () => {
    const url = 'http://localhost:2000/api/person/';
    const res = await fetch(url, {
        method: "GET"
    });
    const { PersonsApp } = await res.json()
    
     

    return PersonsApp;
}

