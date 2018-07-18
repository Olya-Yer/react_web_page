import React, { Component } from 'react'
import MenuBar from './menuBar'
import Content from './content'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { setName } from './actions/userActions'
import User from './user'


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
                <div className="user_section">
                    <User changeUserName={() => this.props.setName()} userName={this.props.nameReducer.Name} />
                </div>
            </div>
        )
    }
}
let counter_for_generator = 0;
const generateName = () => {
    const listOfNames = ["Albert", "Alexander", "Alfred", "Allan", "Allen", "Andrew", "Anthony", "Arthur", "Charles", "Christopher", "Daniel", "David", "Donald", "Douglas", "Edward", "Francis", "Frederick", "George", "Henry", "James", "John", "Joseph", "Lawrence", "Lewis", "Louis", "Martin", "Michael", "Nicholas", "Patrick", "Paul", "Peter", "Philip", "Phillip", "Raymond", "Richard", "Robert", "Stephen", "Steven", "Theodore", "Thomas", "Timothy", "Victor", "Vincent", "Walter", "William"]
    if (counter_for_generator < listOfNames.length) {
        console.log("counter: ", counter_for_generator)
        return listOfNames[counter_for_generator++]
    } else {
        counter_for_generator = 0;
        return listOfNames[counter_for_generator++]
    }
}
const mapStateToProps = (state) => {
    return {
        ageReducer: state.ageReducer,
        nameReducer: state.nameReducer,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setName: () => {
            const name = generateName()
            dispatch(setName(name));
        }
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Page);

