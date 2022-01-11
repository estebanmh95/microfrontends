import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return(
        <>
            <h1>Folders</h1>
            <Link to="/documents">Documents</Link>
            <Link to="/">Home</Link>
        </>
    )
}