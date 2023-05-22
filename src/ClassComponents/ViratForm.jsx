import React, { Component } from 'react'

export default class ViratForm extends Component {
    constructor(props) {
      super(props)
      console.log(props)
    
      this.state = {
        
      }
    }
  render() {
    var {name,runs,wicktes,matches,role,scores}=this.props.user
    var {handlechange,adduser,updateUser,isEdit}=this.props
    return (
      <div>
               <form>
          <h1>Cricket Player's Details</h1>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              handlechange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="runs">Runs:</label>
          <input
            type="text"
            name="runs"
            value={runs}
            onChange={(e) => {
              handlechange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="wicktes">Wicktes:</label>
          <input
            type="text"
            name="wicktes"
            value={wicktes}
            onChange={(e) => {
              handlechange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="matches">Matches Played:</label>
          <input
            type="text"
            name="matches"
            value={matches}
            onChange={(e) => {
              handlechange(e);
            }}
          />
          <br />
          <br />
          <label htmlFor="role">Role:</label>
          <input
            type="radio"
            name="role"
            value="Batsman"
            checked={role == "Batsman"}
            onChange={(e) => {
              handlechange(e);
            }}
          />
          Batsman
          <input
            type="radio"
            name="role"
            value="Bowler"
            checked={role == "Bowler"}
            onChange={(e) => {
              handlechange(e);
            }}
          />
          Bowler
          <input
            type="radio"
            name="role"
            value="Allrounder"
            checked={role == "Allrounder"}
            onChange={(e) => {
              handlechange(e);
            }}
          />
          Allrounder
          <br />
          <br />
          <label htmlFor="scores">Scores In Ipl</label>
          <input
            type="checkbox"
            name="score"
            value="33"
            checked={scores.indexOf("34") > -1}
            onChange={(e) => {
              handlechange(e);
            }}
          />
          33
          <input
            type="checkbox"
            name="score"
            value="44"
            checked={scores.indexOf("4") > -1}
            onChange={(e) => {
              handlechange(e);
            }}
          />
          44
          <input
            type="checkbox"
            name="score"
            value="22"
            checked={scores.indexOf("21") > -1}
            onChange={(e) => {
              handlechange(e);
            }}
          />
          22
          <input
            type="checkbox"
            name="score"
            value="55"
            checked={scores.indexOf("65") > -1}
            onChange={(e) => {
              handlechange(e);
            }}
          />
          55
          <input
            type="checkbox"
            name="score"
            value="89"
            checked={scores.indexOf("79") > -1}
            onChange={(e) => {
              handlechange(e);
            }}
          />
          89
          <br />
          <br />
          {isEdit ? (
            <button type="button" onClick={updateUser}>
              UpdateUser
            </button>
          ) : (
            <button type="button" onClick={adduser}>
              AddUser
            </button>
          )}
        </form>
      </div>
    )
  }
}