import React from 'react';
import FormContainer from "./containers/FormContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div className="container-fluid p-0">
    <NavBar />
    <FormContainer />
    </div>
  );
}

export default App;
