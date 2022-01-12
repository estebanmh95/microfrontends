import './Landing.scss'
import React from 'react'
import CardList from './CardList'
import App1 from './App1'

const Landing = () => {
    return(
        <React.Fragment>
            {/* <App1/> */}
            <div className='landing--main-container'>
                <CardList/>
            </div>
        </React.Fragment>
    )
}

export default Landing