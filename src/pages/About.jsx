import React from "react";



const About = (props) => {

    const goHome = () => {
        props.history.push ('/');
    }
    return (
        <div>
        <button className="btn btn-primary" onClick={goHome}>Regresar a Home</button>
        </div>
);
    }

export default About;