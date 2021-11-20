import { useEffect, useState } from 'react'
import { getPerson } from '../helpers/getPersons'



const PersonFetch = () => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });



    useEffect(() => {

        getPerson()
            .then(res => {

                setstate({
                    data: res,
                    loading: false
                })

            })
    }, [])



    return state;



}


export default PersonFetch;