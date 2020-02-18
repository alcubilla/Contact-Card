import React, { Component } from 'react';
import contactsData from "../contactsData"
import Input from "../components/Input"
import Button from "../components/Button"
import PreviewData from "../components/PreviewData"


class FormContainer extends Component {
    constructor(){
        super();
        this.state ={
            data: contactsData,
            newContact:{
            name:'',
            email:'',
            phone:''
            }
        }
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        

    }
    
    handleName(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState (
            prevState => ({
                newContact: {
                    ...prevState.newContact,
                    name: value
                }
            })
        );
        
    }

    handleEmail(e){
        e.preventDefault();
        let value = e.target.value;
        this.setState (
            prevState => ({
                newContact: {
                    ...prevState.newContact,
                    email: value
                }
            })
        );
        
    }

    handlePhone(e){
    
        let value = e.target.value;
        this.setState (
            prevState => ({
                newContact: {
                    ...prevState.newContact,
                    phone: value
                }
            })
        );
        
    }

    handleFormSubmit(e){
        e.preventDefault();
        let userContact = this.state.newContact;
        this.setState(
            prevState => (
            {data: [ 
                ...prevState.data, userContact],
                newContact:{
                    name:'',
                    email:'',
                    phone:''
                }
                }
            
        ));
    }

    handleClearForm(e){
        e.preventDefault();
        this.setState(
            {   newContact:{
                name: '',
                email:'',
                phone: ''
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
                            handleChange={this.handleName}
                        />
                        <Input
                            name="email"
                            type="email"
                            value={this.state.newContact.email}
                            placeholder= "ingrese el e-mail"
                            handleChange={this.handleEmail}  
                        />
                        <Input
                            name="phone"
                            type="number"
                            value={this.state.newContact.phone}
                            placeholder= "ingrese el telefono"
                            handleChange={this.handlePhone}  
                        />
                        
                        <Button 
                            action ={this.handleFormSubmit}
                            title = "Agregar"
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