import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component{
    render(){
        return(
            <div>
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/catalog">Catalog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;