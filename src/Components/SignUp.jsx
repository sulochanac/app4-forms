import { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
      isEdit: false,
      allusers: [],
      gindex: 0,
    };
  }
  handleChange = (e) => {
    var newperson = { ...this.state.user };
    newperson[e.target.name] = e.target.value;
    this.setState({ user: newperson });
    console.log(e.target.value);
  };
  adduser = () => {
    var alluserscopy = [...this.state.allusers];
    alluserscopy.push({ ...this.state.user });
    this.setState({ allusers: alluserscopy });
    this.clearform();
  };
  clearform = () => {
    var emptyuser = {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
    };
    this.setState({ user: emptyuser });
  };
  handledelete = (i) => {
    var deleteUsers = this.state.allusers.filter((usr, index) => {
      return index != i;
    });
    this.setState({ allusers: deleteUsers });
  };
  handleEdit = (usr, i) => {
    this.setState({ user: usr, isEdit: true, gindex: i });
  };
  updateuser = () => {
    var alluserscopy = [...this.state.allusers];
    alluserscopy[this.state.gindex] = this.state.user;
    this.setState({ allusers: alluserscopy, isEdit: false });
    this.clearform();
  };

  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <form>
          
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.user.name}
            onChange={(e) => this.handleChange(e)}
          />
          <br></br>
          <br />
          <label htmlFor="username">UserName:</label>
          <input
            type="text"
            name="username"
            value={this.state.user.username}
            onChange={(e) => this.handleChange(e)}
          />
          <br></br>
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.user.email}
            onChange={(e) => this.handleChange(e)}
          />
          <br></br>
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.user.password}
            onChange={(e) => this.handleChange(e)}
          />
          <br></br>
          <br />
          <label htmlFor="confirmpassword">ConfirmPassword:</label>
          <input
            type="password"
            name="confirmpassword"
            value={this.state.user.confirmpassword}
            onChange={(e) => this.handleChange(e)}
          />
          <br></br>
          <br />
          {this.state.isEdit ? (
            <button onClick={this.updateuser} type="button">
              Update User
            </button>
          ) : (
            <button type="button" onClick={this.adduser}>
              Add User
            </button>
          )}
        </form>
        <table border={1}>
          <thead>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Password</th>
              <th>ConfirmPassword</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allusers.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.name}</td>
                  <td>{usr.username}</td>
                  <td>{usr.email}</td>
                  <td>{usr.password}</td>
                  <td>{usr.confirmpassword}</td>
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
