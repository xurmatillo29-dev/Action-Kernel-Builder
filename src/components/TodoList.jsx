import TodoItem from './TodoItem'

function TodoList({ todos, onToggle, onDelete, onUpdate, darkMode }) {
  // Sort todos: incomplete first, then by priority
  const priorityOrder = { high: 0, medium: 1, low: 2 }
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1
    }
    return priorityOrder[a.priority] - priorityOrder[b.priority]
  })

  return (
    <div className="space-y-3">
      {sortedTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
          darkMode={darkMode}
        />
      ))}
    </div>
  )
}

export default TodoList
