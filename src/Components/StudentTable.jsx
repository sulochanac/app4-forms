import React, { Component } from 'react'

export default class StudentTable extends Component {
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
            <th>Student Name</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Subjects</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
          <tbody>
          {allusers.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.sname}</td>
                  <td>{usr.fname}</td>
                  <td>{usr.mname}</td>
                  <td>{usr.phonenumber}</td>
                  <td>{usr.email}</td>
                  <td>{usr.gender}</td>
                  <td>{usr.department}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleEdit(usr, i);
                      }}
                    >
                      EditUser
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handledelete(i);
                      }}
                    >
                      DeleteUser
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

    
      