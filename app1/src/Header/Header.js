import React, { useEffect, useState } from "react";
import './header.scss'

const Header = () => {
    const [title, setTitle] = useState("")


    useEffect(()=>{
        setTitle("Best Pokemons")
    },[])
    return(
        <h1 className="pokemon--header">{title}</h1>
    )
}


export default Header;