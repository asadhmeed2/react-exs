import React from 'react';
import Button from './button'
import './chuckNorris.css'


export default class ChuckNorris extends React.Component {
    constructor() {
    super();
    this.state = { jokes: "" , img:""};
    }
    getJoke=async()=>{
         try {
           let data = await (
             await fetch("https://api.chucknorris.io/jokes/random")
           ).json();
       console.log(data);
           this.setState({ jokes: data.value, img: data.icon_url });
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
            <div
              className="icon"
              style={{
                background: `url(${this.state.img}) no-repeat center center/cover`,
              }}
            ></div>
            <Button getJoke={this.getJoke} />
            <div className="jockText">{this.state.jokes}</div>
          </div>
        );
    }
}