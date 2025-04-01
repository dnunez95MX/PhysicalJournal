const { createServer } = require('http');

const server = createServer((req, res) => {
    const url = req.url;
    if (url === "/"){
        res.write('<html>');
        res.write('<head><title>Jotooooo </title></head>');
        res.write('<body><button type="submit">JotooButton</button></body>');
        res.write('</html>');
        return res.end();
    }
    console.log(req)
    res.writeHead(200, { 'Content-Type' : 'text/html'});
    res.write('<h1>Hola joto </h1>');
    return res.end();
});

server.listen(3000);