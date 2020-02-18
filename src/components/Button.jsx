import React from 'react'

const Button = (props) => {
    return ( 
        <button className="btn btn-primary m-4"
        onClick={props.action}>
            {props.title}
        </button>
     );
}
 
export default Button;