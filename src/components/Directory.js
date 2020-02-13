import React, {Component} from "react";
import contactsData from "../contactsData"
import ContactCard from "./ContactCard"


class Directory extends Component{
constructor(){
    super();
    this.state= {
        contacts: contactsData
    }
}
 render(){
    const cards = this.state.contacts.map((contact, idx) => 
    <ContactCard info={contact} key={idx} />);
  //IF ELSE
  let  contenido;
  if (cards.length > 0)
   {
    contenido = cards;
   } else {
     contenido = <p>No hay contactos disponibles</p>;
   }
    return(
        <>
        {contenido}
        </>   
     );
  }
}
export default Directory;