import { Component } from "react";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        sname: "",
        fname: "",
        mname: "",
        phonenumber: "",
        email: "",
        gender: "",
        subjects: [],
      },
      isEdit: false,
      allusers: [],
      gindex: 0,
    };
  }
  handleChange = (e) => {
    var newperson = { ...this.state.user };
       if (e.target.name !== "subject") {
      newperson[e.target.name] = e.target.value;
    } else {
      if (newperson.subjects.indexOf(e.target.value) == -1) {
        newperson.subjects.push(e.target.value);
      } else {
        newperson.subjects = newperson.subjects.filter((subject) => {
          return subject !== e.target.value;
        });
      }
    }
       this.setState({ user: newperson });
    // console.log(e.target.value);
  };
  adduser = () => {
    var alluserscopy = [...this.state.allusers];
    alluserscopy.push({ ...this.state.user });
    this.setState({ allusers: alluserscopy });
    console.log(this.state.user);
    this.clearform();
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
        <h2>Student form</h2>
        <form>
          <label htmlFor="sname">Student Name</label>
          <input
            type="text"
            name="sname"
            value={this.state.user.sname}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <br />
          <label htmlFor="fname">Father Name</label>
          <input
            type="text"
            name="fname"
            value={this.state.user.fname}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <br />
          <label htmlFor="mname">Mother Name</label>
          <input
            type="text"
            name="mname"
            value={this.state.user.mname}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <br />
                   <label htmlFor="phonenumber">Phone Number</label>
          <input
            type="text"
            name="phonenumber"
            value={this.state.user.phonenumber}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.user.email}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <br />
          <label>Gender:</label>
          <br />
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={this.state.user.gender == "male"}
            onChange={this.handleChange}
          />
          <label htmlFor="male">Male</label>
          <br />
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={this.state.user.gender == "female"}
            onChange={this.handleChange}
          />
          <label htmlFor="female">Female</label>
          <br />
          <input
            type="radio"
            id="other"
            name="gender"
            value="other"
            onChange={this.handleChange}
          />
          <label htmlFor="other">Other</label>
          <br />
          <br />
          <label>Subjects:</label>
          <br />
          <input
            type="checkbox"
            id="math"
            name="subject"
            value="math"
            checked={this.state.user.subjects.indexOf("math") > -1}
            onChange={this.handleChange}
          />
          <label htmlFor="math">Math</label>
          <br />
          <input
            type="checkbox"
            id="science"
            name="subject"
            value="science"
            checked={this.state.user.subjects.indexOf("science") > -1}

            onChange={this.handleChange}
          />
          <label htmlFor="science">Science</label>
          <br />
          <input
            type="checkbox"
            id="history"
            name="subject"
            value="history"
            checked={this.state.user.subjects.indexOf("history") > -1}

            onChange={this.handleChange}
          />
          <label htmlFor="history">History</label>
          <br />
          <input
            type="checkbox"
            id="english"
            name="subject"
            value="english"
            checked={this.state.user.subjects.indexOf("english") > -1}

            onChange={this.handleChange}
          />
          <label htmlFor="english">English</label>
          <br />
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
          {this.state.allusers.map((usr, i) => {
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
