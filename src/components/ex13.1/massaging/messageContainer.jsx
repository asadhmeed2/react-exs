import React from "react";
import {
  data,
  getNames,
  getDataOfPersonsWhowsBornBefor1990,
} from "../data/data";
import NameContainer from "./nameContainer"
import CardContainer from "./cardContainer";
import "./messageContainer.css";

export default class MessageContainer extends React.Component {

    constructor(){
        super();
        this.state = {names:[],personsBornBefor1990:[]}
    }
    componentDidMount(){
        this.setState({ names: getNames(data), personsBornBefor1990 :getDataOfPersonsWhowsBornBefor1990(data)});
    }

    render(){
 return (
   <div className="message-container">
     <NameContainer names={this.state.names}/>
     <CardContainer personsBornBefor1990={this.state.personsBornBefor1990}/>
   </div>
 );
    }

}
