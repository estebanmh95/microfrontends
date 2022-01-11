import React, { lazy, useState } from "react";
import App1 from "./components/App1";
import App2 from "./components/App2";
import HeaderMain from "./components/HeaderMain";
import { BrowserRouter, Route, Switch, Link, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import {anotherFunction} from 'App1/App1'


const generateClassName = createGenerateClassName({
    productionPrefix: 'cont'
})

export default () => {
    const [showTitle, setShowTitle] = useState(false)
    const handleChange = () => {
        setShowTitle(!showTitle);
    }
    return(
        <BrowserRouter>
            <React.Suspense fallback="Loading header...">  
                <StylesProvider generateClassName={generateClassName}>
                        <HeaderMain/>
                        <h1>Main App from Home</h1>
                        <App1/>
                        {/* <button onClick={()=>setShowTitle(!showTitle)}>Click me</button>
                        {showTitle && <App1/>}
                        {showTitle && <App2/>} */}
                        {/* <Link to="/app1">App1</Link>  */}
                        {/* <Link to="/app2">App2</Link> */}
                        <Switch>
                            <Route exact path="/app1" component={App1}/>
                            <Route exact path="/app2" component={App2}/>
                        </Switch>
                </StylesProvider>       
            </React.Suspense>
        </BrowserRouter>   
    )
}

