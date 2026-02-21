import ListGroup from "./components/ListGroup";
function App(){
  let item:string[] = ["New York", "Mumbai", "Delhi", "San Fransisco"];
  
  return <div><ListGroup items={item} heading="Sheher ke Naam"/></div>
}
export default App;