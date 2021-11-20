import { useState, useEffect } from "react";
import { getVehicle } from './helpers/getVehicle'



export const PersonFetch = (autos)=>{

    const [vehicles, setvehicles] = useState({
        data: [],
        loading: true
    })


    useEffect(() => {

        getVehicle()
        .then(res => {
            setvehicles({
                vehicles: res,
                loading: false
            })
        })

    }, [autos]);


    return vehicles;

}