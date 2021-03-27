
import './App.css';
import React from 'react'

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './component/Header'
import SideBar from './component/SideBar'
import Chat from './component/Chat'

function App() {
  return (
    // BEM naming convention
    <div className="App"> 
   
    <BrowserRouter >
    <Header />
    <div className="app__body">
        <SideBar /> 

        <Switch>
          <Route path="/room/:roomID">          
            {/* chat component is using use params hook   */}
            <Chat/>

          </Route>

        </Switch>
        
                   
      </div>
   

    </BrowserRouter>

    </div>
  );
}

export default App;
