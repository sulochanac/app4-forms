import React, { Component } from 'react'

export default class ContactTable extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      }
    }
  render() {
    var{allusers,edituser,deleteUser}=this.props
    return (
      <div>
        <table border={1}>
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.name}</td>
                  <td>{usr.email}</td>
                  <td>{usr.password}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleEdit(usr, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(i);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
      
