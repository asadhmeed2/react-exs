import React from "react";
import Avatar from "./avatar"
import "./avatarContainer.css";
export default class AvatarContainer extends React.Component {
  render() {
      return (
          <div className="avatarContainer">
             { this.props.persons.map((person,index)=>{
              return <Avatar person={person} key={index}/>
            })}
          </div>
      )
  }
}
