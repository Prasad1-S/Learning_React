import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert"
function App(){
  let item:string[] = ["New York", "Mumbai", "Delhi", "San Fransisco"];
  const HandleSelectItem = (item:string)=>{
    console.log(item);
  }

  return <div>
            <Alert>
              <h1>Hellow</h1>
            </Alert>
          </div>
}
export default App;