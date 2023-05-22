// import { Component } from "react";

// export default class ContactForm extends Component {
//   constructor(props) {
//     super(props)
//     console.log(props)
  
//     this.state = {
//     }
//     }
//   }
// render() {
//   var {name,email,password}=this.props.user
//   var {handlechange,adduser,updateUser,isEdit}=this.props
//   return 
//     <div>
//     <h2>Contact Form</h2>
//     <form>
//       <label htmlFor="name">Name</label>
//       <input
//         type="text"
//         name="name"
//         value={this.state.user.name}
//         onChange={(e) => this.handlechange(e)}
//       />
//       <br />
//       <br />
//       <label htmlFor="email">Email</label>
//       <input
//         type="text"
//         name="email"
//         value={this.state.user.email}
//         onChange={(e) => this.handlechange(e)}
//       />{" "}
//       <br />
//       <br />
//       <label htmlFor="password">Password</label>
//       <input
//         type="text"
//         name="password"
//         value={this.state.user.password}
//         onChange={(e) => this.handlechange(e)}
//       />
//       <br />
//       <br />
//       {this.state.isEdit ? (
//         <button onClick={this.handleUpdate} type="button">
//           Update User
//         </button>
//       ) : (
//         <button type="button" onClick={this.addUser}>
//           Add User
//         </button>
//       )}
//       </div>
//     </form>
// }