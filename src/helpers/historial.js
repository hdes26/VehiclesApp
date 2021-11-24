

export const historial = async (id) => {
    const url = `https://vehicles-app.herokuapp.com/api/history/${id}`;
    const res = await fetch(url, {
        method:'GET'
    });
    const {historial} = await res.json();
    
    return historial;
    
}

