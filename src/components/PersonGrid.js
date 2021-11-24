import React from 'react';
import ReactDOM from 'react-dom';
import PersonFetch from '../hooks/useFetchPerson'
import PersonGridItem from './PersonGridItem'
import AddPerson from './addPerson'
import Menu from './Menu'

export const PersonGrid = () => {


    const { data, loading } = PersonFetch();

    console.log(data)






    const divRoot = document.querySelector('#root');



    const addPerson = () => {
        ReactDOM.render(<AddPerson />, divRoot);
    }
    /* const sortBy = () => {
        alert("Sort by")

    } */

    return (
        <>

            <Menu />

            <div className="options">
                <a className="addperson" onClick={addPerson}> Add person </a>
                {/* <a className="sortby" onClick={sortBy}> Sort by</a> */}
            </div>
            <div className="content">
                {loading ? <p className="animate__animated animate__flash">Loading...</p> : null}
                <div className="card-grid" >
                    {
                        data.map(data => (
                            <PersonGridItem
                                id={data._id}
                                nombres={data.nombres}
                                apellidos={data.apellidos}
                                fecha_nacimiento={data.fecha_nacimiento}
                                identificacion={data.identificacion}
                                profesion_oficio={data.profesion_oficio}
                                casado={data.casado}
                                ingresos_mensuales={data.ingresos_mensuales}
                                vehiculo={data.vehiculo}
                                key={data._id}
                            />
                        ))
                    }
                </div>
            </div>

        </>

    );
}



