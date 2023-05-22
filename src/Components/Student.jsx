import React, { Component } from "react";

export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fname: "",
        lname: "",
        email: "",
        gender: "",
        subjects: [],
      },
      allusers: [],
      isEdit: false,
      gIndex: 0,
    };
  }

  handleChange = (e) => {
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
    var alluserscopy = [...this.state.allusers];
    alluserscopy.push({ ...this.state.user });
    this.setState({ allusers: alluserscopy });
    console.log(this.state.user);
    this.clearForm();
  };

  clearform = () => {
    var emptyuser = {
      sname: "",
        fname: "",
        mname: "",
        phonenumber: "",
        email: "",
        gender: "",
        subjects: [],
    };
    this.setState({ user: emptyuser });
  };

edituser = (usr, i) => {
    this.setState({ user: usr, isEdit: true, gIndex: i });
  };
  updateUser = () => {
    var alluserscopy = [...this.state.allusers];
    alluserscopy[this.state.gIndex] = this.state.user;
    this.setState({ allusers: alluserscopy, isEdit: false });
    this.clearForm();
  };
  deleteUser = (i) => {
    var DeletedUsers = this.state.allusers.filter((usr, index) => {
      return index != i;
    });
    this.setState({ allusers: DeletedUsers });
  };
  render() {
    return (
      <div>
        <StudentForm
          {...this.state}
          handleChange={this.handleChange}
          addUser={this.addUser}
          updateUser={this.updateUser}
        />
        <StudentTable
          allusers={this.state.allusers}
          edituser={this.edituser}
          deleteUser={this.deleteUser}
        />
    
      </div>
    );
  }
}
