

export const HistorialVehicleItem = ({id,accion,nombres,apellidos,nacimiento,identificacion,profesion,casado,ingresos}) => {

        console.log(id,accion,nombres,apellidos,nacimiento,identificacion,profesion,casado,ingresos)




    return (
        <>

            <div className="historyitem" >
                <div className="fl" id={id}>
                    <div className="titles">
                        <p>Id</p>
                        <p>Nombres</p>
                        <p>Apellidos</p>
                        <p>Profesion</p>
                        <p>Accion</p>

                    </div>
                    <div className="historydata">
                        <p>{identificacion}</p>
                        <p> {nombres} </p>
                        <p> {apellidos} </p>
                        <p> {profesion} </p>
                        <p> {accion} </p>
                    </div>
                </div>
                

            </div>


        </>
    )
}


