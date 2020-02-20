import React from 'react';
import Login from "./pages/Login";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import FormContainer from "./containers/FormContainer";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/FormContainer" component={FormContainer} />  
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
