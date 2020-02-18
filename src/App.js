import React from 'react';
import Directory from "./components/Directory"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div className="container-fluid p-0">
    <NavBar />
    <Directory />
    </div>
  );
}

export default App;
