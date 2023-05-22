import React, { Component } from "react";
import ViratForm from "./ViratForm";
import ViratTable from "./ViratTable";
import "./Virat.css";

export default class Virat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        runs: "",
        wicktes: "",
        matches: "",
        role: "",
        scores: [],
      },
      allusers: [],
      isEdit: false,
      gIndex: 0,
    };
  }
  handlechange = (e) => {
    var newperson = { ...this.state.user };
    if (e.target.name !== "score") {
      newperson[e.target.name] = e.target.value;
    } else {
      if (newperson.scores.indexOf(e.target.value) == -1) {
        newperson.scores.push(e.target.value);
      } else {
        newperson.scores = newperson.scores.filter((score) => {
          return score !== e.target.value;
        });
      }
    }
    this.setState({ user: newperson });
  };
  adduser = () => {
    var alluserscopy = [...this.state.allusers];
    alluserscopy.push({ ...this.state.user });
    this.setState({ allusers: alluserscopy });
    this.clearForm();
  };
  clearForm = () => {
    var emptyuser = {
      name: "",
      runs: "",
      wicktes: "",
      matches: "",
      role: "",
      scores: [],
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
        <ViratForm
          {...this.state}
          handlechange={this.handlechange}
          adduser={this.adduser}
          updateUser={this.updateUser}
        />
        <ViratTable
          allusers={this.state.allusers}
          edituser={this.edituser}
          deleteUser={this.deleteUser}
        />
      </div>
    );
  }
}