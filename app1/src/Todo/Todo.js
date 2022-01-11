import React from "react";
import { Link } from "react-router-dom";

const Todo = ({todos}) => {
    return(
        <React.Fragment>
            <Link to="/documents">Documents</Link> 
            <Link to="/folders">Folders</Link>
            <ul>
                {
                    todos.map((todo,idx)=>{
                        return(
                            <li key={"todos"+idx}>{todo}</li>
                        )
                    })
                }
            </ul>
        </React.Fragment>
    )
}


export default Todo;