import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";


function App(){
  const [alertVisible, setAlertVisblity] = useState(false);
  return (
  <div>
    {alertVisible && <Alert onClose={()=> setAlertVisblity(false)}> <strong>Hello</strong>  World!</Alert>}
    <Button text="Button hai ji ji" color="primary" onClick={()=> {setAlertVisblity(true)}}/>
  </div>
  );
}
export default App;