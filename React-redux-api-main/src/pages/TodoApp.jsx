import { waitForElementToBeRemoved } from '@testing-library/react';
import axios from 'axios';
import React from 'react'

import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {addTodo, getTodos} from "../store/todo/todo.actions"
const TodoApp = () => {

  const dispatch =useDispatch();

  const ref=useRef();

  const {getTodos,addTodo,data: todos}=useSelector((state) => state.todo.todos)

  const addNew =() => {
let value=ref.current.value;

    dispatch(
      addTodo({
      value: value,
      iscompleted: false,

    }))
    ref.current.value=null
  }
  // useEffect(() => {
  //   axios.get("http://localhost:8080/todos")
  //   .then((r) => {
  //     console.log(r.data)
  //   })
  // },[])

  // useEffect(() => {
    
  //   getTodos(dispatch)
  // },[])

// if(waitForElementToBeRemoved.loading) return <h1>Loading...</h1>;
// else if(getTodos.error) return<h1>Somthing went worng..</h1>


  return (
    <div>
        TodoApp
    

<div>
<input ref={ref} type="text" placholder="enter" />
      <button onClick={addNew}>Add</button>
</div>

{/* {todos.map((todo) =>(
  <div key={todo.id}>{todo.value}</div>
))} */}
        </div>
  )
}

export default TodoApp