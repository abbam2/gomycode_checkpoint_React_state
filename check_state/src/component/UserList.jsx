import React, { Component } from 'react';
import User from './User';





class Userlist extends Component {
    
    render() {
        return (
            <div className="main">
                {this.props.users.map(user => <User name={user.name} link={user.link} job={user.job} delUser={this.props.delUser} userId={user.id} key={user.id}/>)}

            </div>
        );
    }
}

export default Userlist;
