# Todo App React

A modern, feature-rich to-do list application built with React, Tailwind CSS, and local storage.

## Features

✨ **Core Features:**
- ✅ Add, edit, and delete tasks
- ✅ Mark tasks as complete/incomplete
- ✅ Categorize tasks (work, personal, shopping, health, etc.)
- ✅ Set priority levels (high, medium, low)
- ✅ Search functionality
- ✅ Filter by category and priority
- ✅ Clear all completed tasks

🎨 **UI/UX Features:**
- ✅ Dark mode support
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and transitions
- ✅ Statistics dashboard
- ✅ Local storage persistence

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Local Storage API** - Data persistence

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/xurmatillo29-dev/Action-Kernel-Builder.git
cd Action-Kernel-Builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

## Usage

### Adding a Task
1. Enter the task title in the input field
2. (Optional) Add a description
3. Select or create a category
4. Choose a priority level
5. Click "Add Task"

### Managing Tasks
- **Complete/Uncomplete**: Click the checkbox next to a task
- **Edit**: Click the edit icon (pencil) to modify a task
- **Delete**: Click the delete icon (trash) to remove a task

### Filtering and Searching
- Use the search bar to find tasks by title or description
- Use category filter to show tasks in specific categories
- Use priority filter to show tasks by priority level

### Dark Mode
- Click the moon/sun icon in the top right to toggle dark mode
- Your preference is saved automatically

## Project Structure

```
src/
├── App.jsx                 # Main app component
├── index.css              # Global styles
├── main.jsx               # React entry point
└── components/
    ├── TodoForm.jsx       # Form for adding new tasks
    ├── TodoList.jsx       # List of tasks
    ├── TodoItem.jsx       # Individual task item
    ├── FilterBar.jsx      # Filter controls
    └── StatsPanel.jsx     # Statistics display
```

## Local Storage

The app automatically saves your tasks and dark mode preference to browser local storage. Data persists even after closing the browser.

**Stored data:**
- `todos` - Array of all tasks
- `darkMode` - Dark mode preference (true/false)

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Author

Created by [xurmatillo29-dev](https://github.com/xurmatillo29-dev)
