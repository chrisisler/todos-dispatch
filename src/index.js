import React from 'react'
import { render } from 'react-dom'
import './index.css'
import Todos from './Todos'
import { without } from './util'
import DispatchableComponent from './DispatchableComponent'
import registerServiceWorker from './registerServiceWorker'

const mockTodos = [
  { task: 'clean room', isDone: true }
  , { task: 'download books', isDone: false }
  , { task: 'wash clothes', isDone: false }
]

const TodoApp = DispatchableComponent({
  reducer: (action, props, state) => {
    switch (action.type) {
      case 'constructor': return { todos: mockTodos }
      case 'DELETE_TODO': return { todos: without(action.payload, state.todos) }
      case 'CREATE_TODO': {
        const event = action.payload
        if (event.key === 'Enter') {
          const newTodo = { task: event.target.value, isDone: false }
          const newState = { todos: state.todos.concat(newTodo) }
          return newState
        }
      }
    }
  },

  render: (dispatch, props, state) => (
    <main>
      <h1>todos</h1>
      <input type='text' placeholder='New Task' onKeyDown={dispatch('CREATE_TODO')}/>
      <Todos todos={state.todos} deleteTodo={dispatch('DELETE_TODO')}/>
    </main>
  )
})

render(<TodoApp />, document.getElementById('root'))
registerServiceWorker()
