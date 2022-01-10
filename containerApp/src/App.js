import React, { lazy, useState } from "react";
import Mount from 'App1/Header'
import Mount2 from 'App2/Headers'
// import {mount} from 'App1/MountApp1'

console.log(Mount)
// const Header = (await import('App1/Header')).default;
// const Headers = (await import('App2/Headers')).default;
// const App2 = (await import('App2/App2')).default;
// const App1 = React.lazy(
//     () => import('App1/App1')
// );
// console.log(mount)

export default () => {
    const [showTitle, setShowTitle] = useState(false)

    const handleChange = () => {
        setShowTitle(!showTitle)
    }
    return(
        <React.Suspense fallback="Loading header...">            
            <h1>Main App</h1>
            <button onClick={()=>setShowTitle(!showTitle)}>Click me</button>
            {showTitle && <Mount/>}
            {showTitle && <Mount2/>}

        </React.Suspense>
    )
}

