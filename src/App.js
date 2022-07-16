import './App.css';
import React from "react";
import Listmichis from "./Complements/Listmichis";
import {Route} from "wouter"
import Menusearch from "./Complements/Menusearch";


function App() {
  return (
    <div className="App">
      <section className="App-header">
        <h1><a href='/'>Gifts</a></h1>
          <Route path='/' component={Menusearch} />
          <Route path='/gift/:giftsearch' component={Listmichis} />
      </section>
    </div>
  )
}

export default App;
