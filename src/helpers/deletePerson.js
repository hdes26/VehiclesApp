

export const DeletePerson = (id)=>{

    const url = `https://vehicles-app.herokuapp.com/api/person/delete/${id}`;
    fetch(url, {
        method:"DELETE"
    })
    


}