import ListGroup from "./components/ListGroup";
function App(){
  let item:string[] = ["New York", "Mumbai", "Delhi", "San Fransisco"];
  const HandleSelectItem = (item:string)=>{
    console.log(item);
  }

  return <div><ListGroup items={item} heading="Sheher ke Naam" onSelectItem={HandleSelectItem}/></div>
}
export default App;