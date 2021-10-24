import React from "react";
import "./avatar.css";
export default class Avatar extends React.Component {

state={name:"",imageUrl:""}

componentDidMount() {
    this.setState({
      name: this.props.person.name,
      imageUrl: this.props.person.imageUrl,
    });
}
componentDidUpdate=(prevProps)=>{
    if(this.props.person.name !== prevProps.person.name){
       this.setState({
         name: this.props.person.name,
         imageUrl: this.props.person.imageUrl,
       });
    }
}
  render() {

     return <div className="avatar">
          <div className="full-name"><h2>{this.state.name}</h2></div>
          <div className="image" style={{background:`url(${this.state.imageUrl})no-repeat center center/cover`}}></div>

      </div>
  }
}
