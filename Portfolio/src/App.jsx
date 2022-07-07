import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Knowledge from './Pages/Knowledge'
import Contact from './Pages/Contact'

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ About } />
        <Route path="/knowledge" component={ Knowledge } />
        <Route path="/contact" component={ Contact } />
      </Switch>
    </div>
  )
}

export default App
