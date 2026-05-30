const { exec } = require('child_process'); 
 
console.log('Running basic tests...'); 
exec('node index.js add "Test task"', (err, stdout) =
  if (err) throw err; 
  console.log(stdout); 
  exec('node index.js list', (err2, stdout2) =
    console.log(stdout2); 
  }); 
}); 
