const { addTask, listTasks, markDone } = require('./src/tasks'); 
const assert = require('assert'); 
 
// Clean up before test 
const fs = require('fs'); 
const path = require('path'); 
const tasksFile = path.join(__dirname, 'tasks.json'); 
if (fs.existsSync(tasksFile)) fs.unlinkSync(tasksFile); 
 
console.log('Running tests...'); 
 
// Test addTask 
const task = addTask('Buy milk'); 
assert.strictEqual(task.description, 'Buy milk'); 
assert.strictEqual(task.done, false); 
console.log('û addTask works'); 
 
// Test listTasks 
const tasks = listTasks(); 
assert.strictEqual(tasks.length, 1); 
console.log('û listTasks works'); 
 
// Test markDone 
const doneTask = markDone(1); 
assert.strictEqual(doneTask.done, true); 
const tasksAfter = listTasks(); 
assert.strictEqual(tasksAfter[0].done, true); 
console.log('û markDone works'); 
 
console.log('All tests passed!'); 
