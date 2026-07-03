import { useState, useEffect } from 'react'
import { Trash2, Plus, Search, Filter, Moon, Sun } from 'lucide-react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import FilterBar from './components/FilterBar'
import StatsPanel from './components/StatsPanel'

function App() {
  const [todos, setTodos] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterPriority, setFilterPriority] = useState('all')
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true'
  })

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos')
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos))
      } catch (error) {
        console.error('Failed to parse todos:', error)
      }
    }
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const addTodo = (newTodo) => {
    const todo = {
      ...newTodo,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      completed: false,
    }
    setTodos([todo, ...todos])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodo = (id, updates) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, ...updates } : todo
    ))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  // Filter todos based on search, category, and priority
  const filteredTodos = todos.filter(todo => {
    const matchesSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (todo.description?.toLowerCase().includes(searchTerm.toLowerCase()) || false)
    const matchesCategory = filterCategory === 'all' || todo.category === filterCategory
    const matchesPriority = filterPriority === 'all' || todo.priority === filterPriority
    return matchesSearch && matchesCategory && matchesPriority
  })

  const categories = ['all', ...new Set(todos.map(t => t.category).filter(Boolean))]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      <div className={`${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } shadow-lg`}>
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-lg ${
                darkMode ? 'bg-indigo-600' : 'bg-indigo-500'
              }`}>
                <Plus className="w-6 h-6 text-white" />
              </div>
              <h1 className={`text-3xl font-bold ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                My Tasks
              </h1>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
              title="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Stats Panel */}
          <StatsPanel todos={todos} />

          {/* Add Todo Form */}
          <TodoForm onAdd={addTodo} categories={categories} />

          {/* Search Bar */}
          <div className={`relative ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            <Search className="absolute left-3 top-3 w-5 h-5" />
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors ${
                darkMode
                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-500 focus:border-indigo-500'
                  : 'bg-white border-gray-200 text-gray-800 placeholder-gray-400 focus:border-indigo-500'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
            />
          </div>

          {/* Filter Bar */}
          <FilterBar
            categories={categories}
            filterCategory={filterCategory}
            setFilterCategory={setFilterCategory}
            filterPriority={filterPriority}
            setFilterPriority={setFilterPriority}
            darkMode={darkMode}
          />

          {/* Clear Completed Button */}
          {todos.some(t => t.completed) && (
            <div className="flex justify-end">
              <button
                onClick={clearCompleted}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  darkMode
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-red-100 hover:bg-red-200 text-red-700'
                }`}
              >
                Clear Completed
              </button>
            </div>
          )}

          {/* Todos List */}
          {filteredTodos.length > 0 ? (
            <TodoList
              todos={filteredTodos}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
              onUpdate={updateTodo}
              darkMode={darkMode}
            />
          ) : (
            <div className={`text-center py-12 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <p className="text-lg font-medium">No tasks found</p>
              <p className="text-sm mt-1">
                {todos.length === 0
                  ? 'Add a new task to get started!'
                  : 'Try adjusting your filters or search term'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
