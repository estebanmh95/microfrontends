import React from "react";


const Todos = ({todos}) => {
    return(
        <ul>
            {
                todos.map((todo,idx)=>{
                    return(
                        <li key={"todos"+idx}>{todo}</li>
                    )
                })
            }
        </ul>
    )
}


export default Todos;