import React from 'react'

class Content extends React.Component {
    render() {
        return (
            <div className='content'>
                <div className='big_image'></div>
                <Register />
            </div>
        )
    }
}
class Register extends React.Component {
    render() {
        return (
            <div className='registration_form'>
                <RegistrationForm />
            </div>
        )
    }
}

class RegistrationForm extends React.Component {
    render() {
        return (
            <form className="reg_form" onSubmit={this.handleSubmit}>
                <input placeholder="Name" className="text_area" type='text' />
                <input className="text_area" type='text' />
                <input className="reg_button" type="submit" value="Register" />
            </form>
        )
    }
}

export default Content