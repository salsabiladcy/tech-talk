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

function addNewTodo(){
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

function completeTodo(targetTodoId){
  const updatedTodos = Todos.map(todo =>{
    if (todo.id === targetTodoId) {
      todo.isComplete = !todo.isComplete
    }
    return todo
  })
  setTodos(updatedTodos)
  }
  console.log(Todos)

  return (
    <>
      <h1>Todo App</h1>
      <input 
        type='text' 
        placeholder='Isi Todo disini' 
        value={newTodo} 
        onChange={event => setNewTodo(event.target.value)}
      />
      <button onClick={() => addNewTodo()}>Create</button>
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
                {todo.title} </li>
          ))
        }
      </ul>
    </>
  )
  }

export default App