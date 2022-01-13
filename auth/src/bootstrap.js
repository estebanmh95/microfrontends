import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) =>{
    ReactDOM.render(<App onNavigate={()=>{}}/>, el)
}
 
if(process.env.NODE_ENV === 'development'){
    mount(document.getElementById('root'))
}

export {mount};