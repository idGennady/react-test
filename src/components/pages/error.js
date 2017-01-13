import React, { Component } from 'react';
import { Link } from 'react-router'

class Error extends Component{  

    render(){
        return(
            <div className="error">
                <h1>Hello world from Error</h1>
                <Link to="/">Home</Link>
            </div>
        )
    }
}

export default Error;