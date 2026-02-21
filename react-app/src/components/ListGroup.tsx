function ListGroup(){

    const item:string[] = ["New York", "Mumbai", "Delhi", "San Fransisco"];
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