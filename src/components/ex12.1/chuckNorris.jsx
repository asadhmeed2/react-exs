import React from 'react';
import Button from './button'
import './chuckNorris.css'


export default class ChuckNorris extends React.Component {
    constructor() {
    super();
    this.state = { jokes: "" , img:"",category:"all", categories: []};
    }
    getJoke=async()=>{
         try {
           let data = await (
             await fetch("https://api.chucknorris.io/jokes/random")
           ).json();
           this.setState({ jokes: data.value, img: data.icon_url });
         } catch (err) {
           console.log(err);
         }
    }
    getJokeByCategory=async()=>{
         try {
           let data = await (
             await fetch(
               `https://api.chucknorris.io/jokes/random?category=${this.state.category}`
             )
           ).json();
           this.setState({ jokes: data.value});
         } catch (err) {
           console.log(err);
         }
    }
    getCategories =async()=>{
         try {
           let data = await (
             await fetch(`https://api.chucknorris.io/jokes/categories`)
           ).json();
           this.setState({ categories: data });
         } catch (err) {
           console.log(err);
         }
    }
    componentDidMount= async ()=> {     
            this.getJoke();
            this.getCategories();
    }
    selectHandler=(e)=>{
    
        this.setState({category:e.target.value});
    }
    render() {
        let jokeHandler = this.getJoke;
        return (
          <div className="chuckNorris">
            <div
              className="icon"
              style={{
                background: `url(${this.state.img}) no-repeat center center/cover`,
              }}
            ></div>

            <Button getJoke={this.state.category==="all"?this.getJoke:this.getJokeByCategory} />
            <select className="select" onChange={this.selectHandler}>
              <option value="all">All</option>
              {this.state.categories.map((category) => {
                return <option value={category}>{category}</option>;
              })}
            </select>
            <div className="jockText">{this.state.jokes}</div>
          </div>
        );
    }
}