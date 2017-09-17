import React from 'react'

const getUniqId = (() => {
  let id = 1
  return () => id++
})()

const _todoPropCss = {
  padding: 0
  , display: 'inline'
  , margin: '1em'
}

const css = {
  todoRow: {
    textAlign: 'center'
    , display: 'flex'
  }
  , todoTask: { ..._todoPropCss, width: '33.3%' }
  , todoIsDone: { ..._todoPropCss, width: '33.3%' }
  , todoDelete: { ..._todoPropCss, width: '33.3%', cursor: 'pointer' }
}

const TodosHeader = () => (
  <div style={css.todoRow}>
    <p style={{...css.todoTask, fontWeight: 'bold'}}>Task Name</p>
    <p style={{...css.todoIsDone, fontWeight: 'bold'}}>Is Done</p>
    <p style={{...css.todoIsDone, fontWeight: 'bold'}}>Delete</p>
  </div>
)

export default (props) => {
  const renderedTodos = props.todos.map(todo => (
    <div style={css.todoRow} key={getUniqId()}>
      <p style={css.todoTask}>{todo.task}</p>
      <p style={css.todoIsDone}>{todo.isDone ? '✓' : '✗'}</p>
      <p style={css.todoDelete} onClick={() => { props.deleteTodo(todo) }}>Delete</p>
    </div>
  ))

  return (
    <div id='todos-container'>
      <TodosHeader />
      {renderedTodos}
    </div>
  )
}
