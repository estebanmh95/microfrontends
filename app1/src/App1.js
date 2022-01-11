import React from "react";
import Todo from "./Todo/Todo";
import Header from "./Header/Header";
import Documents from "./Documents/Documents";
import Folders from "./Folders/Folders";
import { Switch , Route, BrowserRouter, Link, Router } from "react-router-dom";
import {createMemoryHistory} from 'history'


const history = createMemoryHistory();

const App1 = ({onNavigate}) => {

    history.listen(onNavigate);

    const todos = [
        "Run",
        "Eat",
        "Have Dinner",
        "Stay warm"
    ]
    return(
        <Router history={history}>
            <React.Fragment>
                <Header/>
                    {/* <Link to="/documents">Documents</Link> 
                    <Link to="/folders">Folders</Link> */}
                <Switch>
                    <Route exact path="/" render={()=>(<Todo todos={todos}/>)}/>
                    {/* <Route path="/" component={Todo}/> */}
                    <Route exact path="/documents" component={Documents}/>
                    <Route exact path="/folders" component={Folders}/>
                </Switch>
            </React.Fragment>
        </Router>
    )
}

const anotherFunction = () => {
    const currentLocation = history.location.pathname

    if(currentLocation !== location.pathname){
        history.push(location.pathname)
    }
}

export {anotherFunction};
export default App1;