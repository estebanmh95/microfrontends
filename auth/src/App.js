import React from 'react';
import { Switch, Route, Router, BrowserRouter } from 'react-router';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';
import {createMemoryHistory} from 'history'
const history = createMemoryHistory();

const handleAuthRoutes = (props) => {
    const currentLocation = history.location.pathname
    if(currentLocation !== props.pathname){
        history.push(props.pathname)
    }
}

const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({onNavigate, initialPath, onSignIn}) => {

  if(initialPath) {history.push(initialPath)}

  history.listen(onNavigate);

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            {/* <Route exact path="/" >
              <Signin onSignIn={onSignIn}/>
            </Route> */}
            <Route path="/signin" >
              <Signin onSignIn={onSignIn}/>
            </Route>
            <Route path="/signup">
              <Signup onSignIn={onSignIn}/>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};


export {handleAuthRoutes}