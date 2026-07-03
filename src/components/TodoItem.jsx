import { useState } from 'react'
import { Trash2, Edit2, Check, X } from 'lucide-react'

function TodoItem({ todo, onToggle, onDelete, onUpdate, darkMode }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)
  const [editDescription, setEditDescription] = useState(todo.description || '')

  const handleSaveEdit = () => {
    if (editTitle.trim()) {
      onUpdate(todo.id, {
        title: editTitle.trim(),
        description: editDescription.trim(),
      })
      setIsEditing(false)
    }
  }

  const priorityColors = {
    high: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
    medium: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
    low: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  }

  const categoryColors = {
    work: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    personal: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
    shopping: 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
    health: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200',
    general: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200',
  }

  if (isEditing) {
    return (
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-4 fade-in`}>
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className={`w-full px-3 py-2 rounded mb-3 border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
        />
        <textarea
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          rows="2"
          className={`w-full px-3 py-2 rounded mb-4 border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-200'} focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none`}
        />
        <div className="flex gap-2">
          <button
            onClick={handleSaveEdit}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
          >
            <Check className="w-4 h-4" /> Save
          </button>
          <button
            onClick={() => {
              setIsEditing(false)
              setEditTitle(todo.title)
              setEditDescription(todo.description || '')
            }}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 text-gray-800 dark:text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
          >
            <X className="w-4 h-4" /> Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow p-4 fade-in hover:shadow-lg transition-shadow`}
    >
      <div className="flex items-start gap-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mt-1 w-5 h-5 text-indigo-500 rounded cursor-pointer"
        />
        <div className="flex-1 min-w-0">
          <h3
            className={`text-lg font-semibold transition-all ${
              todo.completed
                ? `line-through ${darkMode ? 'text-gray-500' : 'text-gray-400'}`
                : darkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            {todo.title}
          </h3>
          {todo.description && (
            <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {todo.description}
            </p>
          )}
          <div className="flex flex-wrap gap-2 mt-3">
            {todo.category && (
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  categoryColors[todo.category] || categoryColors.general
                }`}
              >
                {todo.category}
              </span>
            )}
            <span
              className={`text-xs px-3 py-1 rounded-full font-medium ${
                priorityColors[todo.priority]
              }`}
            >
              {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
            </span>
          </div>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <button
            onClick={() => setIsEditing(true)}
            className="p-2 text-indigo-500 hover:bg-indigo-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            title="Edit task"
          >
            <Edit2 className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(todo.id)}
            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
            title="Delete task"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
