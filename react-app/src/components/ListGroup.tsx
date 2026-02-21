function ListGroup(){

    let item:string[] = ["New York", "Mumbai", "Delhi", "San Fransisco"];
    item = [];

    if(item.length===0)
        return <p>No item Found</p>
    return (
        <>
        <h1>Hello World</h1>
        <ul  className="list-group">
            {item.map((item)=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
        </>
);
}
export default ListGroup;