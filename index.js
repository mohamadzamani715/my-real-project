#!/usr/bin/env node 
 
const fs = require('fs'); 
const path = require('path'); 
 
const tasksFile = path.join(__dirname, 'tasks.json'); 
 
function loadTasks() { 
  if (!fs.existsSync(tasksFile)) return []; 
  const data = fs.readFileSync(tasksFile, 'utf8'); 
  return JSON.parse(data); 
} 
 
function saveTasks(tasks) { 
  fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2)); 
} 
 
function addTask(description) { 
  const tasks = loadTasks(); 
  const newTask = { id: tasks.length + 1, description, done: false }; 
  tasks.push(newTask); 
  saveTasks(tasks); 
  console.log(`? Task added: ${description}`); 
} 
 
function listTasks() { 
  const tasks = loadTasks(); 
  if (tasks.length === 0) { 
    console.log('No tasks found.'); 
    return; 
  } 
  console.log('?? Your tasks:'); 
  tasks.forEach(task =
    const status = task.done ? 'û' : ' '; 
    console.log(`[${status}] ${task.id}. ${task.description}`); 
  }); 
} 
 
function markDone(id) { 
  const tasks = loadTasks(); 
  const task = tasks.find(t = === parseInt(id)); 
  if (!task) { 
    console.log(`? Task with id ${id} not found.`); 
    return; 
  } 
  task.done = true; 
  saveTasks(tasks); 
  console.log(`? Task ${id} marked as done.`); 
} 
 
const command = process.argv[2]; 
const arg = process.argv[3]; 
 
switch (command) { 
  case 'add': 
    addTask(arg); 
    break; 
  case 'list': 
    listTasks(); 
    break; 
  case 'done': 
    markDone(arg); 
    break; 
  default: 
    console.log(` 
Usage: 
  node index.js add "Buy milk" 
  node index.js list 
  node index.js done 1`); 
} 
