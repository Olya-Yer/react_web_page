import React, { Component } from 'react'
import MenuBar from './menuBar'
import Content from './content'
import { Link } from 'react-router-dom';

class Page extends Component {
    render() {
        return (
            <div className='page'>
                <div className='menu'>
                    <Link className='logo' to="/"></Link>
                    <MenuBar />
                </div>
                <div className='main_page'>
                    <Content />
                </div>
            </div>
        )
    }
}

export default Page;