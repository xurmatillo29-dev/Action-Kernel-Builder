import { Filter } from 'lucide-react'

function FilterBar({
  categories,
  filterCategory,
  setFilterCategory,
  filterPriority,
  setFilterPriority,
  darkMode,
}) {
  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4`}>
      <div className="flex items-center gap-2 mb-4">
        <Filter className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
        <span className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
          Filters
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Category
          </label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg border transition-colors ${
              darkMode
                ? 'bg-gray-700 border-gray-600 text-white focus:border-indigo-500'
                : 'bg-white border-gray-200 text-gray-800 focus:border-indigo-500'
            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Priority
          </label>
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className={`w-full px-4 py-2 rounded-lg border transition-colors ${
              darkMode
                ? 'bg-gray-700 border-gray-600 text-white focus:border-indigo-500'
                : 'bg-white border-gray-200 text-gray-800 focus:border-indigo-500'
            } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
          >
            <option value="all">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default FilterBar
