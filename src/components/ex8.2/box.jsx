import React from 'react';
import './box.css';


class Box extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="box" style={{width:this.props.width, height:this.props.height}}></div>
        )
    }
}
export default Box;