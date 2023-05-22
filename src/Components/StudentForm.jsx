// import React,{Component} from "react"

// export default class StudentForm extends Component{
//   constructor(props) {
//     super(props)
//     console.log(props)
  
//     this.state = {
//     }
//   }
//     }
  
// render() {
//   var {sname,fname,mname,phonenumber,email,gender,department}=this.props.user
//   var {handlechange,adduser,updateUser,isEdit}=this.props
// },
//   return ( <div>
//   <h2>Student form</h2>
//   <form>
//     <label htmlFor="sname">Student Name</label>
//     <input
//       type="text"
//       name="sname"
//       value={this.state.user.sname}
//       onChange={(e) => this.handleChange(e)}
//     />
//     <br />
//     <br />
//     <label htmlFor="fname">Father Name</label>
//     <input
//       type="text"
//       name="fname"
//       value={this.state.user.fname}
//       onChange={(e) => this.handleChange(e)}
//     />
//     <br />
//     <br />
//     <label htmlFor="mname">Mother Name</label>
//     <input
//       type="text"
//       name="mname"
//       value={this.state.user.mname}
//       onChange={(e) => this.handleChange(e)}
//     />
//     <br />
//     <br />
//              <label htmlFor="phonenumber">Phone Number</label>
//     <input
//       type="text"
//       name="phonenumber"
//       value={this.state.user.phonenumber}
//       onChange={(e) => this.handleChange(e)}
//     />
//     <br />
//     <br />
//     <label htmlFor="email">Email</label>
//     <input
//       type="text"
//       name="email"
//       value={this.state.user.email}
//       onChange={(e) => this.handleChange(e)}
//     />
//     <br />
//     <br />
//     <label>Gender:</label>
//     <br />
//     <input
//       type="radio"
//       id="male"
//       name="gender"
//       value="male"
//       checked={this.state.user.gender == "male"}
//       onChange={this.handleChange}
//     />
//     <label htmlFor="male">Male</label>
//     <br />
//     <input
//       type="radio"
//       id="female"
//       name="gender"
//       value="female"
//       checked={this.state.user.gender == "female"}
//       onChange={this.handleChange}
//     />
//     <label htmlFor="female">Female</label>
//     <br />
//     <input
//       type="radio"
//       id="other"
//       name="gender"
//       value="other"
//       onChange={this.handleChange}
//     />
//     <label htmlFor="other">Other</label>
//     <br />
//     <br />
//     <label>Subjects:</label>
//     <br />
//     <input
//       type="checkbox"
//       id="math"
//       name="subject"
//       value="math"
//       checked={this.state.user.subjects.indexOf("math") > -1}
//       onChange={this.handleChange}
//     />
//     <label htmlFor="math">Math</label>
//     <br />
//     <input
//       type="checkbox"
//       id="science"
//       name="subject"
//       value="science"
//       checked={this.state.user.subjects.indexOf("science") > -1}

//       onChange={this.handleChange}
//     />
//     <label htmlFor="science">Science</label>
//     <br />
//     <input
//       type="checkbox"
//       id="history"
//       name="subject"
//       value="history"
//       checked={this.state.user.subjects.indexOf("history") > -1}

//       onChange={this.handleChange}
//     />
//     <label htmlFor="history">History</label>
//     <br />
//     <input
//       type="checkbox"
//       id="english"
//       name="subject"
//       value="english"
//       checked={this.state.user.subjects.indexOf("english") > -1}

//       onChange={this.handleChange}
//     />
//     <label htmlFor="english">English</label>
//     <br />
//     <br />
//     {this.state.isEdit ? (
//       <button onClick={this.updateuser} type="button">
//         Update User
//       </button>
//     ) : (
//       <button type="button" onClick={this.adduser}>
//         Add User
//       </button>
//     )}
//   </form>
