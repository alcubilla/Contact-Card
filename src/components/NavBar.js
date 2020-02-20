import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
 
<nav className="navbar bg-danger">
<Link to="/">Login</Link>
<Link to="/About">About</Link>
<Link to="/FormContainer">Directorio</Link>
</nav>
    
  );
};

export default NavBar;

