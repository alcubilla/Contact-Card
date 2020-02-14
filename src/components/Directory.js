import React, { Component } from "react";
import contactsData from "../contactsData";
import ContactCard from "./ContactCard";

class Directory extends Component {
  constructor() {
    super();
    this.state = {
      contacts: []
    };
    this.addHandler = this.addHandler.bind(this);
    this.delHandler = this.delHandler.bind(this);
  }

  addHandler() {
    this.setState({
      contacts: contactsData
    });
  }

  delHandler() {
    this.setState({
      contacts: []
    });
  }

  render() {
    const cards = this.state.contacts.map((contact, idx) => (
      <ContactCard info={contact} key={idx} />
    ));

    let contenido;
    if (cards.length > 0) {
      contenido = cards;
    } else {
      contenido = <p>No hay contactos disponibles</p>;
    }
    return (
      <>
        <button onClick={this.addHandler} className="btn btn-primary m-2">Agregar</button>
        <button onClick={this.delHandler} className="btn btn-danger m-2">Borrar</button>

        {contenido}
      </>
    );
  }
}
export default Directory;
