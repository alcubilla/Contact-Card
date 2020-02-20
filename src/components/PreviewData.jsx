import React from 'react';

const PreviewData = (props) => {

  const users = props.data.map((user, idx) => (
    <div key={idx}>
      <div className="card border-danger mb-3" > 
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Teléfono: {user.phone}</p>
        <p>Website: {user.website}</p>
      </div>
    </div>
  ));
    
  return (
    <div className="col-6">
    <h3 className="m-3"> Contactos: </h3> {users}
    </div>
  );
}

export default PreviewData;

