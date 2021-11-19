import React, { Component } from 'react';
import './App.css';
import Adduser from './component/AddUser';
import Userlist from './component/UserList';



class App extends Component {

  state = {
    users: [
     {
       id: 1,
        name: "Abba Marc",
        link: "isaac.jpg",
        job: "Dev Fullsatck JS"
      },
      /*{
      id: 2,
        name: "Loic Fian",
        link: "loic.jpg",
        job: "Dev Fullsatck JS"}*/
      
    ]

  }

  handleAdd = (user) => 
  { 
    let newUsers = [...this.state.users];//copie du tableau
    newUsers.push(user);

    this.setState({users: newUsers});
  }



  handleDel = (id) => 
  {

console.log(id)
    let array = [...this.state.users]; // make a separate copy of the array
    
  
    let index = array.findIndex(user =>user.id===id);
    

    
      array.splice(index, 1);
      this.setState({users: array});
    
  }
  

  render() {
    return (
      <div className="App">
        <Adduser addUser={this.handleAdd}  />
        <Userlist users={this.state.users} delUser={this.handleDel} />

      </div>
    );
  }
}

export default App




