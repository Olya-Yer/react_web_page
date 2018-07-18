import React from 'react'


class User extends React.Component {
    render() {
        return (
            <div className="userContainer">
                <div>this is user page example</div>
                <button className="btn" onClick={() => this.props.changeUserName()}>{"Change name of the User"}</button>
                <div className="username">{"current username:"}{}{this.props.userName}</div>
            </div>
        )
    }

}

export default User;

