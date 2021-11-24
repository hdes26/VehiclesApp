
export const getPerson = async () => {
    const url = 'https://vehicles-app.herokuapp.com/api/person/';
    const res = await fetch(url, {
        method: "GET"
    });
    const { PersonsApp } = await res.json()
    
     

    return PersonsApp;
}

