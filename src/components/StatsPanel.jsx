import { CheckCircle, Circle, Zap } from 'lucide-react'

function StatsPanel({ todos }) {
  const completed = todos.filter(t => t.completed).length
  const pending = todos.filter(t => !t.completed).length
  const high = todos.filter(t => t.priority === 'high' && !t.completed).length

  const stats = [
    {
      label: 'Total Tasks',
      value: todos.length,
      icon: Circle,
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300',
    },
    {
      label: 'Completed',
      value: completed,
      icon: CheckCircle,
      color: 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300',
    },
    {
      label: 'Pending',
      value: pending,
      icon: Circle,
      color: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300',
    },
    {
      label: 'High Priority',
      value: high,
      icon: Zap,
      color: 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div key={stat.label} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <Icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StatsPanel
