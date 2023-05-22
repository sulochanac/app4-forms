import { Component } from "react";

export default class UserRegistration extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }
  render() {
    return (
      <div>
        <h2>Student form</h2>
        <form>
          <label htmlFor="uname">Username</label>
          <input type="text"  name="uname" 
          value={this.state.user.uname}
          onChange={(e) => this.handleChange(e)}/>
          <br />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.user.password}
            onChange={(e) => this.handleChange(e)}
          />
          <br></br>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.user.name}
            onChange={(e) => this.handleChange(e)}
          />
          <br></br>

          <label for="address">Address:</label>
          <input type="text" id="address" name="address" 
          value={this.state.user.address}
          onChange={(e) => this.handleChange(e)}/>
          <br />
          <br />

          <label for="country">Country:</label>
          <select id="country" name="country">
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            value={this.state.user.country}
          onChange={(e) => this.handleChange(e)}
          </select>
          <br />
          <br />

          <label for="zipcode">Zip Code:</label>
          <input type="text" id="zipcode" name="zipcode" 
          value={this.state.user.zipcode}
          onChange={(e) => this.handleChange(e)}/>
          <br />
          <br />

          <label>Sex:</label>
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

          <label for="language">Language:</label>
          <br />
          <input
            type="checkbox"
            id="english"
            name="language[]"
            value="english"
          />
          <label for="english">English</label>
          <br />
          <input
            type="checkbox"
            id="spanish"
            name="language[]"
            value="spanish"
            checked={this.state.user.language.indexOf("spanish") > -1}
            onChange={this.handleChange}
          />
          <label for="spanish">Spanish</label>
          <br />
          <input type="checkbox" id="french" name="language[]" 
          value="french" 
          checked={this.state.user.language.indexOf("french") > -1}
          onChange={this.handleChange}/>
          <label for="french">French</label>
          <br />
          <br />

          <label for="about">About:</label>
          <br />
          <textarea id="about" name="about" rows="4" cols="50"></textarea>
          value={this.state.user.about}
            onChange={(e) => this.handleChange(e)}
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
