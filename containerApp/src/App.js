import React, { lazy, Suspense,useState } from "react";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { BrowserRouter, Route, Switch, Link, Router } from "react-router-dom";
import HeaderMain from "./components/HeaderMain";
import Landing from "./components/Landing";
import Progress from "./components/Progress";
// const App1Lazy = lazy(()=>import('./components/App1'))
const App2Lazy = lazy(()=>import('./components/App2'))
const AuthLazy = lazy(()=>import('./components/Auth'))

const generateClassName = createGenerateClassName({
    productionPrefix: 'cont'
})

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false)

    return(
        <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <HeaderMain signedIn={isSignedIn} onSignOut={()=>setIsSignedIn(false)}/>   
                    <Suspense fallback={<Progress/>}>
                        <Switch>
                            {/* <Route path="/pokemon"        component={App1Lazy}/> */}
                            {/* <Route exact path="/pokemon/:id"    component={App1Lazy}/> */}
                            <Route exact path="/app2"           component={App2Lazy}/>
                            <Route path="/signin">
                                <AuthLazy handleSignIn={()=>setIsSignedIn(true)}/>
                            </Route>
                            <Route path="/signup">
                                <AuthLazy handleSignIn={()=>setIsSignedIn(true)}/>
                            </Route>
                            <Route path="/"               component={Landing}/>
                        </Switch>
                    </Suspense>
                </StylesProvider>       
        </BrowserRouter>   
    )
}

