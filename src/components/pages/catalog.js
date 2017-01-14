import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchItem }  from '../../actions/itemAction';

class Catalog extends Component{

    componentDidMount(){
        this.props.dispatch(fetchItem())
    }

    render(){
        return(
            <div className="catalog">
                <h1>Hello world from Catalog</h1>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    items : state.items
});

export default connect(mapStateToProps)(Catalog);