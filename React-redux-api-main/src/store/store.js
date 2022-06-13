import { legacy_createStore,combineReducers,applyMiddleware } from 'redux';

import { counterReducer } from './counter/counter.reducer'
import { todoReducer } from './todo/todo.reducer'

import thunk from "redux-thunk";
import { type } from "@testing-library/user-event/dist/type";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers ({

    counter : counterReducer,
    todo: todoReducer,
});



export const store = 
legacy_createStore(rootReducer, 
     applyMiddleware(thunk));

// const a=() => () => () =>() => console.log('hello');
















