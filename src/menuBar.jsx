import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class MenuBar extends Component {
    render() {
        return (
            <div className='menuBar'>
                <Link to="/aboutUs" >About Us</Link>
            </div>
        )
    }
}

export default MenuBar;