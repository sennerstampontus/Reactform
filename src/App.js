import {BrowserRouter, Switch, Route} from "react-router-dom";
import './App.css';
import { CreateCustomer } from "./views/CreateCustomer";
import Home from "./views/Home";
import ViewCustomer from "./views/ViewCustomer";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Switch>
        <Route path = "/viewcustomer" exact component={ViewCustomer}/>
        <Route path = "/createcustomer" exact component={CreateCustomer}/>
        <Route path= "/" exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
