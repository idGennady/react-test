import React, { Component, PropTypes } from 'react';

import Header from './parts/header';

class App extends Component{

    static propTypes = {
        children: PropTypes.any.isRequired
    };

    render(){
        return(
            <div>
                <Header />
                { this.props.children }
            </div>
        )
    }
}

export default App;