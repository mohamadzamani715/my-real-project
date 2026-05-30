#!/usr/bin/env node 
const { addTask, listTasks, markDone } = require('./src/tasks'); 
const { success, error, info } = require('./utils/logger'); 
 
const command = process.argv[2]; 
const arg = process.argv[3]; 
 
switch (command) { 
  case 'add': 
    if (!arg) { error('Please provide a task description'); process.exit(1); } 
    const newTask = addTask(arg); 
    success(`? Task added: ${newTask.description} (ID: ${newTask.id})`); 
    break; 
  case 'list': 
    const tasks = listTasks(); 
    if (tasks.length === 0) { info('No tasks found.'); } 
    else { 
      console.log('?? Your tasks:'); 
      tasks.forEach(task =
        const status = task.done ? 'û' : ' '; 
        console.log(`[${status}] ${task.id}. ${task.description} (created: ${task.createdAt.slice(0,10)})`); 
      }); 
    } 
    break; 
  case 'done': 
    if (!arg) { error('Please provide a task ID'); process.exit(1); } 
    const updated = markDone(arg); 
    if (!updated) { error(`Task with id ${arg} not found.`); } 
    else { success(`? Task ${arg} marked as done.`); } 
    break; 
  default: 
    console.log(` 
Usage: 
  node index.js add "Write documentation" 
  node index.js list 
  node index.js done 1`); 
} 
