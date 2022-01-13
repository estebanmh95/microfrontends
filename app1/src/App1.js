import React from "react";
import Documents from "./Documents/Documents";
import Folders from "./Folders/Folders";
import { Switch , Route, BrowserRouter, Link, Router } from "react-router-dom";
import {createMemoryHistory} from 'history'
import PokemonList from "./Pokemon/PokemonList";
import PokemonDetail from "./PokemonDetail/PokemonDetail";
import Header from "./Header/Header";
const history = createMemoryHistory();

const anotherFunction = (props) => {
    const currentLocation = history.location.pathname
    if(currentLocation !== props.pathname){
        history.push(props.pathname)
    }
}

const App1 = ({onNavigate, initialPath}) => {

    if(initialPath) {history.push(initialPath)}

    history.listen(onNavigate);

    const todos = [
        "Run",
        "Eat",
        "Have Dinner",
        "Stay warm"
    ]

    return(
                // <Header/>
        <Router history={history}>
            <React.Fragment>
                    {/* <Link to="app1/documents">Documents</Link> 
                    <Link to="/folders">Folders</Link> */}
                <Switch>
                    {/* <Route exact path="/" render={()=>(<Todo todos={todos}/>)}/> */}
                    <Route exact path="/"               component={PokemonList}/>
                    <Route exact path="/pokemon"        component={PokemonList}/>
                    <Route exact path="/pokemon/:id"    component={PokemonDetail}/>
                    <Route exact path="/documents"      component={Documents}/>
                    <Route exact path="/folders"        component={Folders}/>
                </Switch>
            </React.Fragment>
        </Router>
    )
}


export {anotherFunction};
export default App1;