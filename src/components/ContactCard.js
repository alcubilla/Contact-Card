import React from "react";

const ContactCard = props => {
  
 
  console.log(props.info.imgUrl);
return(
<div className="card m-4">
<img src= "{props.info.umgUrl}" alt =" No se encontro la imagen"/>
  <div className="card-body">
    <p>Nombre: {props.info.name}</p>
    <p>telefono: {props.info.phone} </p>
    <p>Email: {props.info.email} </p>
  </div>
</div>
);
}

export default ContactCard;
