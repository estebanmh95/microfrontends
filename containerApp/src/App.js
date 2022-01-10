import React, { lazy, useState } from "react";
// import App1 from "./components/App1";
import App2 from "./components/App2";
import HeaderMain from "./components/HeaderMain";
import { BrowserRouter } from "react-router-dom";

export default () => {
    const [showTitle, setShowTitle] = useState(false)

    const handleChange = () => {
        setShowTitle(!showTitle);
    }
    return(
        <React.Suspense fallback="Loading header...">         
            <BrowserRouter>
                <HeaderMain/>
                <h1>Main App</h1>
                <button onClick={()=>setShowTitle(!showTitle)}>Click me</button>
                {/* {showTitle && <App1/>}
                {showTitle && <App2/>} */}
                {showTitle && <App2/>}
            </BrowserRouter>   
        </React.Suspense>
    )
}

