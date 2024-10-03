
const fs = require('fs');
const path = require('path');

// Define the Logs directory path
const logsDir = path.join(__dirname, 'Logs');

// Function to create log files
const createLogs = () => {
    // Create the Logs directory if it does not exist
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created.');
    }

    // Change the current working directory to the Logs directory
    process.chdir(logsDir);

    // Create 10 log files
    for (let i = 0; i < 10; i++) {
        const logFileName = `log${i}.txt`;
        fs.writeFileSync(logFileName, `This is log file number ${i}.`);
        console.log(logFileName);
    }
};

createLogs();
