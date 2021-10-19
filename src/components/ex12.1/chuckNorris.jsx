import React from 'react';
import Button from './button'
import './chuckNorris.css'


export default class ChuckNorris extends React.Component {
    constructor() {
    super();
    this.state = { jokes: ""};
    }
    getJoke=async()=>{
         try {
           let data = await (
             await fetch("https://api.chucknorris.io/jokes/random")
           ).json();
       console.log(data);
           this.setState({ jokes: data.value });
         } catch (err) {
           console.log(err);
         }
    }

    componentDidMount= async ()=> {     
            this.getJoke();
    }
    render() {
        return (
            <div className="chuckNorris">
                <Button getJoke={this.getJoke}/>
                <div className="jockText">{this.state.jokes}</div>
            </div>
        )
    }
}