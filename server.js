const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'})
	fs.readFile('./main.html', null, function(error, data) {
		if (error) {
			res.writeHead(404);
			res.write('File not found!');
		}
		else {
			res.write(data);
		}
		res.end();
	})
});

server.listen(3000, () => console.log('ok'));