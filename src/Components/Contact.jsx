import { Component } from "react";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        email: "",
        password: "",
      },
      allUsers: [],
      isEdit: false,
      gIndex: 0,
    };
  }
  handlechange = (e) => {
    var newUser = { ...this.state.user };
    if (e.target.name !== "subject") {
      newUser[e.target.name] = e.target.value;
    } else {
      if (newUser.subjects.indexOf(e.target.value) == -1) {
        newUser.subjects.push(e.target.value);
      } else {
        newUser.subjects = newUser.subjects.filter((subject) => {
          return subject !== e.target.value;
        });
      }
    }
    this.setState({ user: newUser });
  };
  addUser = () => {
    var allUsersCopy = [...this.state.allUsers];
    allUsersCopy.push({ ...this.state.user });
    this.setState({ allUsers: allUsersCopy });
    this.clearForm();
  };
  clearForm = () => {
    var emptyUser = {
      name: "",
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
        <ContactForm
          {...this.state}
          handleChange={this.handleChange}
          addUser={this.addUser}
          updateUser={this.updateUser}
        />
        <ContactTable
          allusers={this.state.allusers}
          edituser={this.edituser}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }
}
