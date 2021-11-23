import React, { useState } from "react";

const Form = ({ list, setList,setError,loanding,setLoanding }) => {
    const [datos, setDatos] = useState({
        id:"",
        dueno: "",
        modelo: "",
        marca: "",
        year: "",
    });

    const onSubmitForm = async (e) => {
        e.preventDefault();

        if (datos.id === "" || datos.dueno === "" || datos.modelo === "" || datos.marca === "" || datos.year === ""){
            setError(true)
            return 

        }

        setError(false)
        
        setLoanding(true);

        setTimeout(() => {

            setList([...list, datos]);
            e.target.reset();
            
            setLoanding(false)
            
        }, 2000);
        // const datos = await fetch(''); Esto me daba error
    };
    const onChangeInput = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: [e.target.value],
        });
    };
    return (
        <div style={{ width: "70%" }}>
            <form onSubmit={onSubmitForm}>
                <div className="container-form">
                <div className="input-container">
                        <input
                            type="text"
                            name="id"           
                            onChange={onChangeInput}
                            placeholder="Key"
                        />
                    </div>
                <div className="input-container">
                        <input
                            type="text"
                            name="dueno"           
                            onChange={onChangeInput}
                            placeholder="Dueño"
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="text"
                            name="modelo"
                            onChange={onChangeInput}
                            placeholder="Modelo"
                        />
                    </div>

                    <div className="input-container">
                        <input
                            type="text"
                            name="marca"
                            onChange={onChangeInput}
                            placeholder="Marca"
                        />
                    </div>

                    <div className="input-container">
                        <input
                            type="number"
                            name="year" 
                            onChange={onChangeInput}
                            placeholder="Año"
                        />
                    </div>

                    <div className="input-container">
                        <button type="submit" >Registrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
