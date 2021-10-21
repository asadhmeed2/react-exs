import React from "react";
import Input from "./input";
import InputBtn from "./inputBtn";
import InputCancelBtn from "./cancel";
import Select from "./select";
import Textarea from "./textarea";
import "./survey.css";

export default class Survey extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    age: "",
    text: "",
    theFormSubmitted: false,
  };
  onButtonClicked = (e) => {
    e.preventDefault();
    {
      this.state.firstName.length &&
        this.state.lastName.length &&
        this.state.age.length &&
        this.state.text.length&&
      this.setState({ theFormSubmitted: true });
    }
  };
  onInputChange = (type, value) => {
    {
      type === "firstName" && this.setState({ firstName: value });
    }
    {
      type === "lastName" && this.setState({ lastName: value });
    }
    {
      type === "age" &&
        this.setState({ age: value !== "choices age" ? value : "" });
    }
    {
      type === "text" && this.setState({ text: value });
    }
  };
  onCancel = () => {
    this.setState({ theFormSubmitted: false });
  };
  render() {
    const ages = ["choices age", "0-14", "15-19", "20-29", "30-40", "Over-40"];
    console.log(this.state);
    return (
      <div className="servey">
        <form onSubmit={this.onButtonClicked}>
          <Input
            type="text"
            placeholder=""
            title="First Name :"
            name="firstName"
            onChange={this.onInputChange}
          />
          <Input
            type="text"
            placeholder=""
            title="Last Name :"
            name="lastName"
            onChange={this.onInputChange}
          />
          <Select ages={ages} onChange={this.onInputChange} />
          <Textarea name="freeText" onChange={this.onInputChange} />
          <InputBtn
            type="submit"
            value="Continue"
            name="continueBtn"
            title=""
          />
        </form>
        {this.state.theFormSubmitted && (
          <div className="formData">
            <div className="firstName">{this.state.firstName}</div>
            <div className="firstName">{this.state.lastName}</div>
            <div className="firstName">{this.state.age}</div>
            <div className="firstName">{this.state.text}</div>
            <InputBtn type="button" value="confirm" />
            <InputCancelBtn
              type="button"
              value="cancle"
              onClick={this.onCancel}
            />
          </div>
        )}
      </div>
    );
  }
}
