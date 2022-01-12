import React from "react";
import Todo from "./Todo/Todo";
import Header from "./Header/Header";
import Documents from "./Documents/Documents";
import Folders from "./Folders/Folders";
import { Switch , Route, BrowserRouter, Link, Router } from "react-router-dom";
import {createMemoryHistory} from 'history'
import PokemonList from "./Pokemon/PokemonList";
import PokemonDetail from "./PokemonDetail/PokemonDetail";

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
                {/* <Header/> */}
                    {/* <Link to="app1/documents">Documents</Link> 
                    <Link to="/folders">Folders</Link> */}
                {/* <Switch> */}
                    {/* <Route exact path="/" render={()=>(<Todo todos={todos}/>)}/> */}
                    <Route exact path="/" component={PokemonList}/>
                    <Route exact path="/app1" component={PokemonList}/>
                    <Route path="/app1/pokemon/:id" component={PokemonDetail}/>
                    <Route exact path="/documents" component={Documents}/>
                    <Route exact path="/folders" component={Folders}/>
                {/* </Switch> */}
            </React.Fragment>
        </Router>
    )
}

const anotherFunction = (props) => {
    const currentLocation = history.location.pathname

    if(currentLocation !== props.pathname){
        history.push(props.pathname)
    }
}

export {anotherFunction};
export default App1;