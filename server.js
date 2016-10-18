const http = require('http');

const httpServer = http.createServer(function (req, res)
{
	if (req.url === '/Piano'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('Mozart');
	res.end('Beethoven');
 
 }
	else if (req.url === '/Flute'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('Adeney');
	res.end('Andersen');
 }
	else if (req.url === '/Guitar'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('Thayil');
	res.end('Randolph');
 }
	else if (req.url === '/trumpet'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('Anthony');
	res.end('Balsom');
	}
	else if (req.url === '/dhol'){
 
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.write('Gevorik');
	res.end('Dzori Minas');
 }
});
httpServer.listen(3001);