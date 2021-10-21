import React from 'react';
import  CheckBox  from './checkBox';
import "./checkBoxContainer.css"



export default class CheckBoxContainer extends React.Component {

render() {
    return (
      <div className="checkBoxContainer">
          <form>
        <CheckBox text="I read teh term of the app" checked={false} />
        <CheckBox text="I accept teh term of the app" checked={false} />
        <CheckBox text="I want to get the weekly news letter" checked={true} />
        <CheckBox text="I want to get sales and offers" checked={true} />
          </form>
      </div>
    );
}

}

