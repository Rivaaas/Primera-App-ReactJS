import React from 'react'
import { useState } from 'react/cjs/react.development';

function Buscar({ list, setList }) {

    const [filtro, setFiltro] = useState("");



    const onSubmitForm = (e) => {
        e.preventDefault();
        const newList = list.filter(item => filtro === item.modelo)

        setList(newList);
    }

    const onChangeInput = (e) => {
        setFiltro(e.target.value);
    }
    return (
        <>
            <div>
                <form onSubmit={onSubmitForm}>
                    <input type="text" name="filtro" onChange={onChangeInput}></input>
                    <button type="submit">Guardar</button>
                </form>
            </div>
            <div>
                {}
            </div>
        </>
    )
}

export default Buscar
