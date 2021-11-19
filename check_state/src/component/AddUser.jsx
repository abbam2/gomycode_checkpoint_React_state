import React, { Component } from 'react';

class Adduser extends Component {

state={
    name: " ",

}




    handleChange = (a) => {
        this.setState(
            {name:a.target.value}
            )
    }

    handleClick = () =>{
        this.props.addUser(
            {name: this.state.name}
        
        )
    }
    render() {
        return (
            <div className="header">
                <h2>Ajouter un utilisateur <label htmlFor="">{this.state.name}</label> </h2>
                <h3>Ajouter en live des utilisateurs</h3>
                <input type="text" onChange={this.handleChange} /><button onClick={this.handleClick}><i className="fas fa-plus-circle"></i></button>
            </div>
        );
    }
}


export default Adduser;
