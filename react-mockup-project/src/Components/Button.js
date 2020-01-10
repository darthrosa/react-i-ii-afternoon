import React, {Component} from 'react';

class Button extends Component {
    constructor() {
        super()
        
    }

    render(){
        return(
            <div>
                <button onClick={this.props.previous}> {'<'}Previous </button>
                <button>Edit</button>
                <button>Delete</button>
                <button>New</button>
                <button onClick={this.props.ext}>Next{'>'}</button>
            </div>
        )
    }
}

export default Button;