import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import Register from './pages/Register';
import Login from './pages/Login';

// import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <h1>Halaman test</h1>
      <Router>
      <Switch>
        <Route path ='/register'>
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
