import React from "react";
import Todo from "./Todo/Todo";
import Header from "./Header/Header";


const App = () => {
    const todos = [
        "Run",
        "Eat",
        "Have Dinner",
        "Stay warm"
    ]
    return(
        <React.Fragment>
            <Todo todos={todos}/>
            <Header/>
        </React.Fragment>
    )
}

export default App;