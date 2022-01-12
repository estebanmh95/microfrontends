import React, { lazy, useState } from "react";
import App1 from "./components/App1";
import App2 from "./components/App2";
import HeaderMain from "./components/HeaderMain";
import { BrowserRouter, Route, Switch, Link, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Landing from "./components/Landing";

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
                    {/* {!showTitle && <App1/>} */}
                    {/* <Switch> */}
                        <Route exact path="/"               component={Landing}/>
                        <Route exact path="/pokemon"        component={App1}/>
                        <Route exact path="/pokemon/:id"    component={App1}/>
                        <Route exact path="/app2"           component={App2}/>
                    {/* </Switch> */}
                </StylesProvider>       
            </React.Suspense>
        </BrowserRouter>   
    )
}

