import React from 'react'
import ReactDom from 'react-dom'
import './style.css'

class Page extends React.Component {
  render () {
    return (
      <div className='page'>
        <div className='menu'>
          <div className='logo'></div>
          <MenuBar />
        </div>
        <div className='content'>
          <Content />}
        </div>
      </div>
    )
  }
}
class MenuBar extends React.Component {
  render () {
    return (
      <div className='menuBar'>
        <MenuButton value='About us' />
        <MenuButton value="contacts" />
        <MenuButton value="other" />
      </div>
    )
  }
}
class MenuButton extends React.Component {
  render () {
    return (
      <div className="menuButton">{this.props.value}</div>
    )
  }
}
class Content extends React.Component {
  render () {
    return (
      <Register />
    )
  }
}
class Register extends React.Component {
  render () {
    return (
      <div className='registration_form'>
        <ul>
          <li>logo</li>
        </ul>
      </div>
    )
  }
}

ReactDom.render(
  <Page />,
  document.getElementById('root')
)
