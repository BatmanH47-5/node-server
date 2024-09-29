const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message) => {
    const datetime = format(new Date(), 'ddMMyyyy\tHH:mm:ss'); // Corrected formatting
    const logItem = `${datetime}\t${uuid()}\t${message}\n`; // Added newline character for readability
    console.log(logItem);

    try {
        const logsDir = path.join(__dirname, 'logs');
        // Ensure the logs directory exists
        if (!fs.existsSync(logsDir)) {
            await fsPromises.mkdir(logsDir, { recursive: true }); // { recursive: true } ensures any necessary subdirectories are created
        }
        // Append the log item to the file
        await fsPromises.appendFile(path.join(logsDir, 'eventFile.txt'), logItem);
    } catch (err) {
        console.error('Error writing to file:', err);
    }
};

module.exports = logEvents;
