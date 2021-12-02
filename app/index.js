const http = require('http');
const fs = require('fs');
const path = require('path');

const START_MARKER_FILE = path.join(__dirname, '.started');
const HTML_FILE = path.join(__dirname, 'index.html');

try {
    fs.unlinkSync(START_MARKER_FILE);
} catch (e) {
    if (e.code !== 'ENOENT') {
        console.error('Failed removing starting marker file:', e.message);
        process.exit(1);
    }
}

http.createServer(async (req, res) => {
    fs.createReadStream(HTML_FILE).pipe(res);
}).listen(8080).on('listening', () => {
    setTimeout(() => {
        fs.writeFileSync(START_MARKER_FILE, 'started');
    }, 3000);
});

function exit() {
    fs.unlinkSync(START_MARKER_FILE);
    process.exit();
}

process.on('SIGINT', exit);
process.on('SIGTERM', exit);