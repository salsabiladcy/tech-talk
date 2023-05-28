import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid'

const DUMMY_TODO = [
  {
    id: nanoid(),
    title: "Belajar React",
    isComplete: false
  }
]

function App() {
  const [Todos, setTodos] = useState(DUMMY_TODO)
  const [newTodo, setNewTodo] = useState('')
  const [error, setError] = useState('')

function addNewTodo(){
  if(newTodo.length === 0){
    setError("Todo tidak boleh kosong")
  } else{
    const updatedTodos = [...Todos]
  const objTodo = {
    id: nanoid(),
    title: newTodo,
    isCompleted: false
  }

  updatedTodos.push(objTodo)
  setTodos(updatedTodos)
  setNewTodo('')
  }
  
}

function completeTodo(targetTodoId){
  const updatedTodos = Todos.map(todo =>{
    if (todo.id === targetTodoId) {
      todo.isComplete = !todo.isComplete
    }
    return todo
  })
  setTodos(updatedTodos)
  }
  function handleChange(event){
    setNewTodo(event.target.value)
    setError('')
  }
  console.log(Todos)

  return (
    <>
      <h1>Todo App</h1>
      <input 
        type='text' 
        placeholder='Isi Todo disini' 
        value={newTodo} 
        onChange={event => handleChange(event)}
      />
      <button onClick={() => addNewTodo()}>Create</button>
      {
        error.length > 0 ? (
          <p style={{ color:"red"}}>{error}</p>
         ) : null
      }

      <ul>
        {
          Todos.map((todo) => (
            <li key = {todo.id} 
            className='todo-item'
            style={{
              textDecoration: todo.isComplete ? 'line-through' : 'none'
            }}>
              <input type="checkbox" 
              onChange={()=>completeTodo(todo.id)}/>
              <p>{todo.title}</p>
              <button style={{marginLeft:'16px'}}>X</button> </li>
          ))
        }
      </ul>
    </>
  )
  }

export default App