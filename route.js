
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'message.txt');

const requestHandler = (req, res) => {

    if (req.url === '/' && req.method === 'GET') {
        fs.readFile(filePath, 'utf8', (err, data) => {
            const messages = err
                ? []
                : data.split('\n').filter(msg => msg.trim() !== '');

            res.setHeader('Content-Type', 'text/html');

            res.end(`
                <h2>Messages</h2>
                ${messages.reverse().map(msg => `<p>${msg}</p>`).join('')}

                <form action="/message" method="POST">
                    <label>Name:</label>
                    <input type="text" name="message" required>
                    <button type="submit">Add</button>
                </form>
            `);
        });
    }

    else if (req.url === '/message' && req.method === 'POST') {
        let chunks = [];

        req.on('data', chunk => {
            chunks.push(chunk);
        });

        req.on('end', () => {
            const body = Buffer.concat(chunks).toString();
            const message = new URLSearchParams(body).get('message');

            fs.writeFile(filePath, message + '\n', { flag: 'a' }, err => {
                if (err) {
                    res.statusCode = 500;
                    return res.end('Error writing to file');
                }

                res.statusCode = 302;
                res.setHeader('Location', '/');
                res.end();
            });
        });
    }

    else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }
};

module.exports = requestHandler;
