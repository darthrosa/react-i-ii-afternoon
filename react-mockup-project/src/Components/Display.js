import React, {Component} from 'react';

class Display extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div className='display-container'>
                <div id='number-count'>{this.props.data.id}/25</div>
                <h2>
                    {this.props.data.name.first} {this.props.data.name.last}
                </h2>
                <p>From: {this.props.data.city}, {this.props.data.country}
                </p>
                <p>Job Title: {this.props.data.title}</p>
                <p>Employer: {this.props.data.employer}</p>

                <ol>Favorite Movies:
                    <li>{this.props.data.favoriteMovies[0]}</li>
                    <li>{this.props.data.favoriteMovies[1]}</li>
                    <li>{this.props.data.favoriteMovies[2]}</li>
                </ol>    
            </div>
        )
    }
}


export default Display
