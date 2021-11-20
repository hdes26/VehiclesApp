import { useState, useEffect } from "react";
import { getPerson } from '../helpers/getPersons'



const PersonFetch = (personas)=>{

    const [person, setperson] = useState({
        data:[],
        loading:true
    });


    useEffect(() => {

         getPerson()
            .then(res => 
                setperson({
                    data: res,
                    loading:false

                })
            )

    }, [personas]);


    return person;

}


export default PersonFetch;