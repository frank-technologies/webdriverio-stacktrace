const fs = require('fs/promises');
const path = require('path');
const childProcess = require('child_process');
const assert = require('assert');

const START_MARKER_FILE = path.join(__dirname, '..', 'app', '.started');
const APP_FILE = path.join(__dirname, '..', 'app', 'index.js');

describe('Test', () => {
    let server;
    before(async() => {
        server = childProcess.exec(`node ${APP_FILE}`);
        await browser.waitUntil(async () => {
            let content;
            try {
                content = (await fs.readFile(START_MARKER_FILE)).toString();
            } catch (e) {
                if (e.code === 'ENOENT') {
                    return false;
                }

                throw e;
            }

            return content === 'started';
        });
    });

    after(async() => {
        server.kill();
    });

    it('should show stack trace problem', async () => {
        await browser.url('http://localhost:8080');
        assert.strictEqual(await browser.$('h1').getText(), 'test');

        await $('button').moveTo();
    });
});

