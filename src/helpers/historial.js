

export const historial = async (id) => {
    const url = `http://localhost:2000/api/history/${id}`;
    const res = await fetch(url, {
        method:'GET'
    });
    const {historial} = await res.json();
    
    return historial;
    
}

