import React from 'react';
//import './App.css';
import NavBar from './components/NavBar'
import Main from './components/Main'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (    

      <div className="App">
        <NavBar />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/main" exact component={Main}></Route>
        </Switch>

      </div>

  );
}

const Home = () => (
  <div className="container">
    <h1>Home page</h1>
  </div>
)


export default App;
