import React, { Component } from 'react'

export default class ViratTable extends Component {
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
                <tr>
                <th>Name</th>
              <th>Runs</th>
              <th>Wicktes</th>
              <th>MatchesPlayed</th>
              <th>Role</th>
              <th>ScoresinIpl</th>
              <th>Edit</th>
              <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {allusers.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.name}</td>
                  <td>{usr.runs}</td>
                  <td>{usr.wicktes}</td>
                  <td>{usr.matches}</td>
                  <td>{usr.role}</td>
                  <td>{usr.scores}</td>
                  <td>
                    <button
                      onClick={() => {
                        edituser(usr, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                       deleteUser(i);
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
    )
  }
}