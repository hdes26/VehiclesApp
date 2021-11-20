import { useEffect, useState } from 'react'
import { getVehicle  } from '../helpers/getVehicles'



const VehiclesFetch = () => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });



    useEffect(() => {

        getVehicle()
            .then(res => {

                setstate({
                    data: res,
                    loading: false
                })

            })
    }, [])



    return state;



}


export default VehiclesFetch;