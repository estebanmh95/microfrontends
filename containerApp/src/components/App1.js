import App1 from 'App1/App1'
import React,{useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {anotherFunction} from 'App1/App1'

export default () => {

    const history = useHistory();

    const onNavigate = ({pathname: nextPathname}) => {
        const {pathname} = history.location

        if(pathname !== nextPathname){
            history.push(nextPathname)
        }
    }

    history.listen(anotherFunction)
    return <App1 onNavigate={onNavigate}/>
};