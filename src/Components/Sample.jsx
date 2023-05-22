import { Component } from "react";

export default class Sample extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        fname: "",
        course: "",
        department: "",
        country: "",
      },
      allUsers: [],
      isEdit: false,
      gIndex: 0,
    };
  }
  handleChange = (e) => {
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
  clearForm = (e) => {
    var emptyUser = {
      fname: "",
      course: "",
      department: "",
      country: "",
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
        <h2>Sample Form</h2>
        <form>
          <label htmlFor="fname">Name : </label>
          <input
            type="text"
            name="fname"
            value={this.state.user.fname}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <br />
          <label htmlFor="course">Course : </label>
          <input
            type="text"
            name="course"
            value={this.state.user.course}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <br />
          <label htmlFor="department">Department : </label>
          <input
            type="text"
            name="department"
            value={this.state.user.department}
            onChange={(e) => this.handleChange(e)}
          />{" "}
          <br />
          <br />
          <label htmlFor="country">Country : </label>
          <input
            type="text"
            name="country"
            value={this.state.user.country}
            onChange={(e) => this.handleChange(e)}
          />{" "}
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
            <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Department</th>
            <th>Country</th>
            <th>Edit</th>
            <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUsers.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.fname}</td>
                  <td>{usr.course}</td>
                  <td>{usr.department}</td>
                  <td>{usr.country}</td>
                  
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
