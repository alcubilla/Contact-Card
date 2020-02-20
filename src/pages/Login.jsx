import React from "react";
import Button from "../components/Button"
import Input from "../components/Input";


const Login = (props) => {

    const goFormContainer = () =>{ props.history.push('/FormContainer'); }

    return (
        <form>
            <h5 className="m-3">Accede al Directorio</h5>
            <Input 
                name="name"
                type="text"
                placeholder="Ingrese el nombre"
             />
            <Input
                name="psw"
                type="texto"
                placeholder= "ingrese la contraseña"    
            />
            <Button action={goFormContainer} title= "entrar"/> 
             {/* al hacer click llama al metodo goFormContainer, el cual rutea a /FormContainer que está definida en App.js*/}      
        </form>
    ); 
}

export default Login;



