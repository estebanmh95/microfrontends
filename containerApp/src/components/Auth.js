import Auth from 'Auth/Auth'
import React,{useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {handleAuthRoutes} from 'Auth/Auth'

export default (props) => {

    const history = useHistory();

    const onNavigate = ({pathname: nextPathname}) => {
        const {pathname} = history.location
        if(pathname !== nextPathname){
            history.push(nextPathname)
        }
    }

    const onSignIn = () => {
        console.log(props)
        props.handleSignIn()
    }
    const initialPath = history.location.pathname

    history.listen(handleAuthRoutes)
    return <Auth onNavigate={onNavigate} initialPath={initialPath} onSignIn={onSignIn}/>
};