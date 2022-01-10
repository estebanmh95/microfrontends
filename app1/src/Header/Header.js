import React, { useEffect, useState } from "react";
import './header.scss'

const Header = () => {
    const [title, setTitle] = useState("")


    useEffect(()=>{
        setTitle("App1")
    },[])
    return(
        <h1 className="header">{title}</h1>
    )
}


export default Header;