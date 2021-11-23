import React from 'react'

const Item = ({auto,list,setList}) => {
    const {id,modelo,marca,year} = auto;


    const onClickEliminar = () => {
        console.log("aqui eliminamos compaire")

        const newLista = list.filter(item => item.id !== id);
        setList(newLista);

        
    }
    return (
        <>
        <li>
            <h3>{auto.modelo}</h3>
            <p>{auto.marca}</p>
            <p>{auto.year}</p>
            <button onClick={onClickEliminar}>Eliminar</button>
        </li>

            
        </>
    )
}

export default Item
