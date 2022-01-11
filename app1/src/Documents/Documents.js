import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return(
        <>
            <h1>Documents</h1>
            <Link to="/folders">Folders</Link>
            <Link to="/">Home</Link>
        </>
    )
}