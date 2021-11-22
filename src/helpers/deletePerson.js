

export const DeletePerson = (id)=>{

    const url = `http://localhost:2000/api/person/delete/${id}`;
    fetch(url, {
        method:"DELETE"
    })
    


}