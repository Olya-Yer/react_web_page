import React from 'react'

class AboutUs extends React.Component {
    goBack(e) {
        e.preventDefault();
        const {history} = this.props;
        history.goBack();
    }
    render() {
        console.log(this.props);
        return (
            <div className="aboutUsBox">
                <a href="#" onClick={(e) => this.goBack(e)}>Go back</a>
                <div>about us</div>
            </div>
        )
    }
}

export default AboutUs;