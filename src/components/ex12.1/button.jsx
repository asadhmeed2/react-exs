import React from 'react';




export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="button" value={"Get joke"} id="joke" onClick={this.props.getJoke}/>
        )
    }
}