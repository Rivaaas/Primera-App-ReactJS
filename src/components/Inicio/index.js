import React, { useState } from 'react'
import Form from '../Form';
import List from '../List';
import Buscar from '../Buscar';

const Inicio = () => {
    const [list, setList] = useState([]);


    const [error, setError] = useState(false);

    const [loanding, setLoanding] = useState(false);


    return (
        <>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: "#eeae",
                flexDirection: "column"
            }}>
                <h1>Inicio</h1>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-left">
                        <Form loanding={loanding} setLoanding={setLoanding} setError={setError} list={list} setList={setList} />
                        {loanding ? (<h1>Añadiendo</h1>) : null}
                        {error ? (<h1>Error</h1>) : null}
                    </div>
                    <div className="col-right">
                    <Buscar list={list} setList={setList}/>
                    <List list={list} setList={setList} />
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Inicio;
