import React from 'react';
import './App.css'
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        {/* <Route path="/about" component={ About } />
        <Route path="*" component={ NotFound } /> */}
      </Switch>
    </div>
  )
}

export default App
