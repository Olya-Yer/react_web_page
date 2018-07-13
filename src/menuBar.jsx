import React from 'react'
import createHistory from "history/createBrowserHistory"
import { withRouter } from 'react-router-dom';

const history = createHistory()
class MenuBar extends React.Component {
    render() {
        return (
            <div className='menuBar'>
                <AboutUs />
            </div>
        )
    }
}

class AboutUs extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        console.log("----1----", e.target)
        history.push("/aboutUs");
        console.log("----2----", e.target)
    }
    render() {
        return (
            <div className="menuButton" onClick={this.handleClick} >About Us</div>
        )
    }
}


export default withRouter(MenuBar)