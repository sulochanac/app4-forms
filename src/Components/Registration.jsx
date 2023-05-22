import { Component } from "react";

export default class Registration extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        uname: "",
        fname:"",
        mname:"",
        email: "",
        password: "",
        
      },
      allUsers: [],
      isEdit: false,
      gIndex: 0,
    };
  }
  handlechange = (e) => {
    var newPerson = { ...this.state.user };
    newPerson[e.target.name] = e.target.value;
    this.setState({ user: newPerson });
    console.log(e.target.value)
  };
  addUser = () => {
    var allUsersCopy = [...this.state.allUsers];
    allUsersCopy.push({ ...this.state.user });
    this.setState({ allUsers: allUsersCopy });
    this.clearForm();
  };
  clearForm = () => {
    var emptyUser = {
        uname: "",
        fname:"",
        mname:"",
        email: "",
        password: "",
    };
    this.setState({ user: emptyUser });
  };

  handleDelete = (i) => {
    var deletedUsers = this.state.allUsers.filter((usr, index) => {
      return index !== i;
    });
    this.setState({ allUsers: deletedUsers });
  };

  handleEdit = (usr, i) => {
    this.setState({ user: usr, isEdit: true, gIndex: i });
  };
  handleUpdate = () => {
    var allUsersCopy = [...this.state.allUsers];
    allUsersCopy[this.state.gIndex] = this.state.user;
    this.setState({ allUsers: allUsersCopy, isEdit: false });
    this.clearForm();
  };
  render() {
    return (
      <div>
        <h2>Registration Form</h2>
        <form>
          <label htmlFor="uname">User Name</label>
          <input
            type="text"
            name="uname"
            value={this.state.user.uname}
            onChange={(e) => this.handlechange(e)}
          />
          <br />
          <br />

          <label htmlFor="fname">Father  Name</label>
          <input
            type="text"
            name="fname"
            value={this.state.user.fname}
            onChange={(e) => this.handlechange(e)}
          />
          <br />
          <br />

          <label htmlFor="mname">Mother Name</label>
          <input
            type="text"
            name="mname"
            value={this.state.user.mname}
            onChange={(e) => this.handlechange(e)}
          />
          <br />
          <br />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.user.email}
            onChange={(e) => this.handlechange(e)}
          />{" "}
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            name="password"
            value={this.state.user.password}
            onChange={(e) => this.handlechange(e)}
          />
          <br />
          <br />
          {this.state.isEdit ? (
            <button onClick={this.handleUpdate} type="button">
              Update User
            </button>
          ) : (
            <button type="button" onClick={this.addUser}>
              Add User
            </button>
          )}
        </form>
        <table border={1}>
          <thead>
            <th>User Name</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.uname}</td>
                  <td>{usr.fname}</td>
                  <td>{usr.mname}</td>
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
