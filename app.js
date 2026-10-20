
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');

        res.end(`
            <form action="/message" method="POST">
                <label>Name:</label>
                <input type="text" name="username" required>
                <button type="submit">Add</button>
            </form>
        `);
    }

    else if (url === '/message' && method === 'POST') {
        let dataChunk = [];

        req.on('data', (chunks) => {
            dataChunk.push(chunks);
        });

        req.on('end', () => {
            const combinedBuffer = Buffer.concat(dataChunk);
            const body = combinedBuffer.toString();

            const username = new URLSearchParams(body).get('username');

            // Write the submitted name to a file
            fs.writeFile('message.txt', username + '\n', { flag: 'a' }, (err) => {
                if (err) {
                    res.statusCode = 500;
                    res.end('Error writing to file');
                    return;
                }

                // Redirect with HTTP 302
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
});

const port = 3001;

server.listen(port, () => {
    console.log('Server is running at http://localhost:3001');
});
