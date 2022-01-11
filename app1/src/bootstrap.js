import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App1';

async function mount(el){
    ReactDOM.render(<App1 onNavigate={()=>{}}/>, el)
}

if(process.env.NODE_ENV === 'development'){
    mount(document.getElementById('root'))
}

export {mount};