import React, { Component } from 'react';
//import contactsData from "../contactsData"
import Input from "../components/Input"
import Button from "../components/Button"
import PreviewData from "../components/PreviewData"


class FormContainer extends Component {
   state ={
            data: [],
            newContact:{
                name:'',
                email:'',
                phone:'',
                website: ''
            }
    }
  
    AddContact = (e) =>{
    e.preventDefault();
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(response => response.json())
        .then (data => {
          
            this.setState({
                data: data
            });
        });
    }   
     

    handleInput =(e) =>{
        
        let value = e.target.value;
        let name = e.target.name;
     
        this.setState(
            prevState => ({
                newContact: {
                    ...prevState.newContact,
                    [name]: value,
                }
            })
        )
    }
               
    handleFormSubmit = (e) =>{
        e.preventDefault();
        let userContact = this.state.newContact;
        this.setState(
            prevState => (
            {data: [ 
                ...prevState.data, userContact],
                newContact:{
                    name:'',
                    email:'',
                    phone:'',
                    website:''
                }
                }
            
        ));
    }

    handleClearForm = (e) =>{
        e.preventDefault();
        this.setState(
            {   newContact:{
                name: '',
                email:'',
                phone: '',
                website:''
                }
            }    
        );
        
    }



    render() { 
        return ( 
            <div className="row m-6">
                <div className="col-4">
                    
                    <form>
                    <h5 className="m-3">Agregar un Contacto Nuevo</h5>
                        <Input 
                            name="name"
                            type="text"
                            value={this.state.newContact.name}
                            placeholder="Ingrese el nombre"
                            handleChange={this.handleInput}
                        />
                        <Input
                            name="email"
                            type="email"
                            value={this.state.newContact.email}
                            placeholder= "ingrese el e-mail"
                            handleChange={this.handleInput}  
                        />
                        <Input
                            name="phone"
                            type="number"
                            value={this.state.newContact.phone}
                            placeholder= "ingrese el telefono"
                            handleChange={this.handleInput}  
                        />
                        <Input
                            name="website"
                            type="number"
                            value={this.state.newContact.website}
                            placeholder= "ingrese el Website"
                            handleChange={this.handleInput}  
                        />
                        <Button 
                            action ={this.handleFormSubmit}
                            title = "Agregar"
                        />
                        
                        <Button 
                            action ={this.AddContact}
                            title = "Ver Contactos"
                        />
                    
                        <Button 
                            action ={this.handleClearForm}
                            title = "Limpiar"
                        />
                    </form>
               </div>
               <PreviewData data={this.state.data} 
               />
            </div>   
         );
    }
};
 
export default FormContainer;