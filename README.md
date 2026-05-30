# Task CLI - A Professional Task Manager 
 
A command-line tool to manage your daily tasks efficiently. Built with **Node.js** and **modular architecture**. 
 
## Features 
- ? Add new tasks with timestamp 
- ?? List all tasks with status and creation date 
- ?? Mark tasks as completed 
- ?? Persistent JSON storage 
- ?? Colored output using `chalk` 
- ?? Built-in test suite 
- ?? Modular code (separate logic, logging, config) 
 
## Installation 
```bash 
git clone https://github.com/mohamadzamani715/my-real-project.git 
cd my-real-project 
npm install 
``` 
 
## Usage 
```bash 
node index.js add "Write documentation" 
node index.js list 
node index.js done 1 
``` 
 
## Testing 
```bash 
npm test 
``` 
 
## Project Structure 
``` 
. 
ÃÄÄ src/ 
³   ÀÄÄ tasks.js       # Core task logic 
ÃÄÄ utils/ 
³   ÀÄÄ logger.js      # Colored logging 
ÃÄÄ index.js           # CLI entry point 
ÃÄÄ config.js          # App configuration 
ÃÄÄ test.js            # Unit tests 
ÃÄÄ package.json 
ÀÄÄ README.md 
``` 
 
## License 
MIT 
