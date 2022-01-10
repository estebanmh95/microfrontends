import React, { lazy, useState } from "react";
import App1 from "./components/App1";
import App2 from "./components/App2";
import HeaderMain from "./components/HeaderMain";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";


const generateClassName = createGenerateClassName({
    productionPrefix: 'cont'
})
export default () => {
    const [showTitle, setShowTitle] = useState(false)

    const handleChange = () => {
        setShowTitle(!showTitle);
    }
    return(
        <React.Suspense fallback="Loading header...">  
            <StylesProvider generateClassName={generateClassName}>
                <BrowserRouter>
                    <HeaderMain/>
                    <h1>Main App</h1>
                    <button onClick={()=>setShowTitle(!showTitle)}>Click me</button>
                    {showTitle && <App1/>}
                    {showTitle && <App2/>}
                </BrowserRouter>   
            </StylesProvider>       
        </React.Suspense>
    )
}

