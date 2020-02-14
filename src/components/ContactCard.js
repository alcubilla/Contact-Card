import React from "react";

const ContactCard = props => {
  const sayHi = () => {
    console.log ("Hola mundo gatuno");
  }
return(

  <div className="container" id="tarjeta">
  <div className="card border-danger mb-3" > 
  <img src={props.info.imgUrl} alt =" No se encontro la imagen"/>
  <div className="card-body">
    <h3 className="card-title">{props.info.name}</h3>
    <p className="card-text">  {props.info.phone} </p>
    <p className="card-text">  {props.info.email} </p>
    <button  className="btn btn-danger" onClick={sayHi}>Adoptame</button>
  </div>
</div>
</div>
/* 

<div className="card m-4">
<img src= "{props.info.umgUrl}" alt =" No se encontro la imagen"/>
  <div className="card-body">
    <p>Nombre: {props.info.name}</p>
    <p>telefono: {props.info.phone} </p>
    <p>Email: {props.info.email} </p>
  </div>
</div> */
);
}

export default ContactCard;
