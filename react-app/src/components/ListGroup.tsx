import { useState } from "react";

function ListGroup(){

    let item:string[] = ["New York", "Mumbai", "Delhi", "San Fransisco"];
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
        <h1>List</h1>
        {item.length===0 ? <p>No item Found</p> : null}
        <ul  className="list-group">
            {item.map((item, index)=>(
                <li 
                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                key={item}
                onClick={()=> {setSelectedIndex(index);}}
                >{item}
                </li>
            ))}
        </ul>
        </>
);
}
export default ListGroup;