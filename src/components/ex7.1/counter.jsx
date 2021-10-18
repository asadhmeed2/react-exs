import React from 'react';
import ReactDom from 'react-dom';
import Button from './button';

class Counter extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="container">
                <Button/>
            </div>
        )
    }
}
export default Counter;