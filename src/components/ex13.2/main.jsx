import React from "react";
import Input from "./input";
import AvatarContainer from "./avatarContainer";
import "./main.css";
export default class Button extends React.Component {
  constructor() {
    super();
    this.state = { searchName: "", data: [], filteredData: [] };
  }

  filterDataAndSaveInState = (data, searchName) => {
    const filteredData = data.filter((person) =>
      person.name.toLowerCase().includes(searchName.toLowerCase())
    );
    this.setState({ filteredData: filteredData });
  };
  createNewUserData = (arrayData) => {
    return arrayData.map((person) => {
      return {
        name: `${person.results[0].name.first} ${person.results[0].name.last} `,
        imageUrl: person.results[0].picture.large,
        id: person.results[0].id.value,
      };
    });
  };
  componentDidMount = async () => {
    let dataArray = [];
    for (let i = 0; i < 10; i++) {
      let data = await (await fetch("https://randomuser.me/api/")).json();
      dataArray = [...dataArray, data];
    }
    dataArray = this.createNewUserData(dataArray);
    this.setState({ data: dataArray, filteredData: dataArray });
  };
  onChange = (e) => {
    this.setState({ searchName: e.target.value });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.searchName !== this.state.searchName) {
      this.filterDataAndSaveInState(this.state.data, this.state.searchName);
    }
    console.log("data: ", this.state.filteredData);
  };
  render() {
    return (
      <div className="mainContainer">
        <Input value={this.state.searchName} onChange={this.onChange} />
        <AvatarContainer persons={this.state.filteredData} />
      </div>
    );
  }
}
