const fs = require('fs'); 
const path = require('path'); 
 
const TASKS_FILE = path.join(__dirname, '..', 'tasks.json'); 
 
function loadTasks() { 
  if (!fs.existsSync(TASKS_FILE)) return []; 
  const data = fs.readFileSync(TASKS_FILE, 'utf8'); 
  return JSON.parse(data); 
} 
 
function saveTasks(tasks) { 
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2)); 
} 
 
function addTask(description) { 
  const tasks = loadTasks(); 
  const newTask = { id: tasks.length + 1, description, done: false, createdAt: new Date().toISOString() }; 
  tasks.push(newTask); 
  saveTasks(tasks); 
  return newTask; 
} 
 
function listTasks() { 
  return loadTasks(); 
} 
 
function markDone(id) { 
  const tasks = loadTasks(); 
  const task = tasks.find(t = === parseInt(id)); 
  if (!task) return null; 
  task.done = true; 
  saveTasks(tasks); 
  return task; 
} 
 
module.exports = { addTask, listTasks, markDone }; 
