import axios from "axios"
import { 
   
    
     COMPLETE_TODO,
     UPDATE_TODO,
    DELETE_TODO,
    GET_TODOS,
    GET_TODOS_ERROR,
    GET_TODOS_LODING,
    GET_TODOS_SUCESS
    } from "./todo.types"

export const  getTodos=() => (dispatch)=> {
    dispatch({type: GET_TODOS_LODING})

    return axios.get("http://localhost:8080/todos")
    .then((r) =>{

        dispatch({
            type: GET_TODOS_SUCESS,payload: r.data
        }).catch(() => {

            dispatch({type:GET_TODOS_ERROR});

        });

    })
        
        
}


export const addTodo=(payload) => (dispatch)=>
{
    dispatch({type: GET_TODOS_LODING})

    
    axios
    .post("http://localhost:8080/todoscvxs",payload)
    .then((r) =>{

        dispatch({
            type: GET_TODOS_SUCESS,payload: r.data
        }).catch(() => {

            dispatch({type:GET_TODOS_ERROR});

        });

    })
  
}




export const completeTodo=(id)=>({type: COMPLETE_TODO,payload:id})


export const UpdateTodo=(payload)=>({type: UPDATE_TODO,payload})

export const deleteTodo=(id)=>({type: DELETE_TODO,payload:id})






