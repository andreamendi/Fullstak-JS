import React, { Component, Fragment } from 'react';


class InfoForm extends Component {


    onSubmit(event){
        event.preventDefault();

        const nombre = event.target.nombre.value;
        const apellido = event.target.apellido.value;
        const edad = event.target.edad.value;
        console.log(nombre, apellido, edad);

        //Se puede hacer el json como abajo, simpre y cuando la llave y la propiedad coinsidan en nombre, podemos omitir el declararla
        const infoBody = {
            nombre,
            apellido,
            edad
        }

        const url = 'http://localhost:8000/api';
        const config = {
            method: 'post',
            body: JSON.stringify(infoBody),
            headers:{
                'Content-Type':'application/json'
            }
        }
        console.log(config);

        fetch(`${url}/info`, config)
            .then(resp => {
                alert('Se creo correctamente');
            })
            .catch(err => {
                alert('ERROR');
                console.log(err)
            })       
    }

    render(){
        return(
            <Fragment>
                <h4>Crear una nueva persona</h4>
                <form onSubmit={this.onSubmit}>
                    <input
                        name = 'nombre'
                        placeholder = 'nombre'
                    />
                    <input
                        name = 'apellido'
                        placeholder = 'apellido'
                    />
                    <input
                        name = 'edad'
                        placeholder = 'edad'
                    />
                    <input
                        type = 'submit'
                        value = 'Crear'
                    />
                </form>
            </Fragment>
        )
    }
} 

export default InfoForm;