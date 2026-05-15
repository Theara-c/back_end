// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
  

    console.log(`Received ${method} request for ${url}`);
    
switch(true)  {
    case url === '/' && method === 'GET' : 
        res.writeHead(200, { 'Content-Type': 'text/html' });
        return res.end(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <p>This is a simple Node.js server.</p>
                </body>
            </html>
        `);
        break;
    
    // Implement more routes here
    case  url === '/about' && method === 'GET' : 
        res.writeHead( 200,  { 'Content-Type':  'text/plain'})
        return res.end( `<p> About us: at CADT, we love node.js!</p>`); // we only send it once
    case  url === '/contact-us' && method === 'GET' :
        return res.end( 'You can reach us vai email…');
    case url === '/products' && method === 'GET' :
        return res.end ('Buy one get one...' ) ;
    case url === '/project' && method === 'GET':
        return res.end ('Here are our awesome project.');
    default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');

    }
});
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
