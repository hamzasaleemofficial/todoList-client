import axios from 'axios';
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB} from './type';
const REACT_APP_URL='http://localhost:5000';

export const addNewTodo = (data) => async(dispatch) =>{

    try{
        const res = await axios.post(`${REACT_APP_URL}/todos`,{data});
        console.log(res.data);
        dispatch({
            type: ADDNEW_TODO,
            payload: res.data
        });
    }
    catch(error){
        console.log("Error while calling ADD NEW TODO", error.message);
    }
   
}



export const getAllTodos = () => async(dispatch) => {

    try{
        const res = await axios.get(`${REACT_APP_URL}/todos`);
        console.log(res.data);
        dispatch({
            type: GETALL_TODO,
            payload: res.data
        });
    }
    catch(error){
        console.log("Error while calling ALL TODO", error.message);
    }

}

export const toggleTodo = (id) => async(dispatch) => {

    try{
        const res = await axios.get(`${REACT_APP_URL}/todos/${id}`);
        console.log(res.data);
        dispatch({
            type: TOGGLE_TODO,
            payload: res.data
        });
    }
    catch(error){
        console.log("Error while toggle TODO", error.message);
    }

}

export const updateTodo = (id, data) => async(dispatch) => {

    try{
        const res = await axios.put(`${REACT_APP_URL}/todos/${id}`,{data});
        console.log(res.data);
        dispatch({
            type: UPDATE_TODO,
            payload: res.data
        });
    }
    catch(error){
        console.log("Error while update TODO", error.message);
    }

}


export const deleteTodo = (id) => async(dispatch) => {

    try{
        const res = await axios.delete(`${REACT_APP_URL}/todos/${id}`);
        console.log(res.data);
        dispatch({
            type: DELETE_TODO,
            payload: res.data
        });
    }
    catch(error){
        console.log("Error while delete TODO", error.message);
    }

}

export const toggleTab = (tab) => async (dispatch) => {
    
    dispatch({type: TOGGLE_TAB, selected: tab})
}