import React from 'react'
import MenuBar from './menuBar'
import Content from './content'

class Page extends React.Component {
    render() {
        return (
            <div className='page'>
                <div className='menu'>
                    <div className='logo'></div>
                    <MenuBar />
                </div>
                <div className='main_page'>
                    <Content />}
          </div>
            </div>
        )
    }
}

export default Page;