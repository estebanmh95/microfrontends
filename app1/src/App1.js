import React from "react";
import { Switch , Route, BrowserRouter, Link, Router } from "react-router-dom";
import PokemonList from "./Pokemon/PokemonList";
// import PokemonDetail from "./PokemonDetail/PokemonDetail";
// import Header from "./Header/Header";
import {createMemoryHistory} from 'history'
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

    return(
        // <Header/>
        <Router history={history}>
            <React.Fragment>
                <Switch>
                    {/* <Route path="/pokemon/:id"          component={PokemonDetail}/> */}
                    <Route path="/pokemon"        component={PokemonList}/>
                </Switch>
            </React.Fragment>
        </Router>
    )
}


export {anotherFunction};
export default App1;