import { getTodos } from "./todo.actions";
import {
    ADD_TODO,
    COMPLETE_TODO,
    DELETE_TODO,
    GET_TODOS_ERROR,
    GET_TODOS_LODING,
    GET_TODOS_SUCESS,
    UPDATE_TODO,
    ADD_TODOS_ERROR,
    ADD_TODOS_LODING,
    ADD_TODOS_SUCESS,
} from "./todo.types"

const initalState={
addTodos:{
  loading: false,
  error:false,
  
},
getTodos: {
  loading: false,
  error:false,
  
},
data:[],
  
}

export const todoReducer =(state={todos: []},{type,payload}) => {


    switch (type) {
      case GET_TODOS_LODING: {
        return{
          ...state,
          getTodos:{
            ...state.getTodos,
            loading:true
          }

        }
      }
      case GET_TODOS_SUCESS: {
        return{
          ...state,
          getTodos:{
            ...state.getTodos,
            loading:false,
            data: payload,
          }
         
        }
      }
      case GET_TODOS_ERROR: {
        return{
          ...state,
          getTodos:{
            ...state.getTodos,
            loading:false,
            error:true
          }
        }
      }

        case ADD_TODOS_LODING:{
          return{
            ...state,
            addTodos: {
              loading:true
            },
              
          };
            
        }
        case ADD_TODOS_SUCESS:{
          return{
            ...state,
            getTodos:{
              data: [...state.getTodos.data,payload],
            },
            addTodos: {
              loading:true
            },
              
          };
            
        }
        case ADD_TODOS_ERROR:{
          return{
            ...state,
            addTodos: {
              loading:true,
              error:false
            }
              
          };
            
        }
        
        case DELETE_TODO:{
          
          return { ...state}
        }
        case COMPLETE_TODO:{
          
            return { ...state }
          }
          case UPDATE_TODO:{
          
            return { ...state }
          }
        default:
          return state
        }
      }

