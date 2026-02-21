import { MouseEvent } from "react";
function ListGroup(){

    let item:string[] = ["New York", "Mumbai", "Delhi", "San Fransisco"];
    
    const HandleEvent = (event:MouseEvent)=> console.log(event)
    return (
        <>
        <h1>List</h1>
        {item.length===0 ? <p>No item Found</p> : null}
        <ul  className="list-group">
            {item.map((item)=>(
                <li 
                className="list-group-item"
                key={item}
                onClick={HandleEvent}
                >{item}
                </li>
            ))}
        </ul>
        </>
);
}
export default ListGroup;