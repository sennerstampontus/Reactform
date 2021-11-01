import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import { CreateCustomer } from "./views/CreateCustomer";
import Home from "./views/Home";
import ViewCustomer from "./views/ViewCustomer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = "/" component={Home}/>
        <Route exact path = "/viewcustomer" component={ViewCustomer}/>
        <Route exact path = "/createcustomer" component={CreateCustomer}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
