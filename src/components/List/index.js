import React from "react";
import Item from '../Item';

const List = ({ list , setList}) => {


    
    return (
        <div style={{ width: "70%" }}>
            <ul className="list">
                {list.map(auto => (
                    <Item key={auto.id} auto={auto} list={list} setList ={setList} />
                ))}
            </ul>
        </div>
    );
};

export default List;
