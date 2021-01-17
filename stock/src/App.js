import './App.css';
import  Nav from "./components/Nav";
import Login from "./components/Login"
import Register from "./components/Register"
import Stock from './components/Stock'
import Specific from './components/Specific'
import Logout from './components/Logout'
import Portfolio from './components/Portfolio'

import React,{useState} from 'react';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
function App() {
  const [price,setPrice]= useState(0);
  const [symbol,setSymbol]= useState("");
  return (
      <main>
      <BrowserRouter> 
        <Route path="/" component={Nav} />
          <Switch>
            <Route path="/login" component={Login} exact/>
            <Route path="/logout" component={Logout} exact/>
            <Route path="/register" component={Register} exact/>
            <Route path="/portfolio" component={Portfolio} exact/>
            <Route path="/stock" render={() => <Stock/>} />
            <Route path="/specific" render={() => <Specific
                pricing={(value)=>setPrice(value)}
                stockworth = {price}/>} />
            <Route path="/" render={() => <Login/>} />
          </Switch>
        </BrowserRouter>
      </main>
  )
}

export default App;
