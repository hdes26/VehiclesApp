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

console.log(state.data)

    return state;



}


export default PersonFetch;