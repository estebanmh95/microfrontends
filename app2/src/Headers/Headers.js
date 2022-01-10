import React, { useEffect, useState } from "react";
import './headers.scss'

const Headers = () => {
    const [title, setTitle] = useState("")


    useEffect(()=>{
        setTitle("App 2 Test")
    },[])
    return(
        <h1 className="header">{title}</h1>
    )
}


export default Headers;