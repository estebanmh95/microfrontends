import React from "react";
import Todos from "./Todos/Todos";
import Headers from "./Headers/Headers";


const App2 = () => {
    const todos = [
        "Run",
        "Run",
        "Run",
        "Run",
        "Run",
        "Run",
        "Run",
        "Run",
    ]
    return(
        <React.Fragment>
            <Headers/>
            <Todos todos={todos}/>
        </React.Fragment>
    )
}

export default App2;