import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";



const TodoForm = () =>{
    const [text, setText] = useState("");
    const dispatch = useDispatch();

// dispatch action to call store or way to trigger a state change.
    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text));

        setText("");

    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }
    return(


        <form className="form" onSubmit={onFormSubmit}>
            <input
             placeholder="Enter me todo..."
             className="input"
             onChange={onInputChange}
             value={text}
            />
        </form>
        
    )
}
export default TodoForm;