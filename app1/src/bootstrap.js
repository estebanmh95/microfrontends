import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


async function mount(el){
    ReactDOM.render(<App/>, el)
}

if(process.env.NODE_ENV === 'development'){
    mount(document.getElementById('root'))
    // ReactDOM.render(<App />, document.getElementById('root'));
}

export {mount};