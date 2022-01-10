import React from "react";
import Todo from "./Todo/Todo";
import Header from "./Header/Header";


const App1 = () => {
    const todos = [
        "Run",
        "Eat",
        "Have Dinner",
        "Stay warm"
    ]
    return(
        <React.Fragment>
            <Header/>
            <Todo todos={todos}/>
        </React.Fragment>
    )
}

export default App1;