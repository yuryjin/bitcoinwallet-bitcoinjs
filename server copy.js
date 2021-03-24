const http = require('http');
const url = require('url');
const fs = require('fs');

//const server = http.createServer();

const server = http.createServer((req, res) => {
	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "main.html"
	}

	let file = __dirname + "/a" + path;


	res.writeHead(200, {'Content-Type': 'text/html'})
	fs.readFile(file, function(error, data) {
		if (error) {
			res.writeHead(404);
			res.write('File not found!');
		}
		else {
			res.setHeader("X-Content-Type-Options", "nosniff");
			switch (path) {
				case "main.html":
					res.writeHead(200, { "Content-type": "text/html" });			
			}
			res.end(data);
			//res.write(data);
		}
		//res.end(data);
		//res.end();
	})
	/*
	res.writeHead(200, {'Content-Type': 'text/html'})
	fs.readFile(path, null, function(error, data) {
		if (error) {
			res.writeHead(404);
			res.write('File not found!');
		}
		else {
			res.write(data);
		}
		res.end();
	})
	*/



	/*
	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");
	if (path == "") {
		path = "main.html"
	}
	//console.log(`Requested path ${path} `);

	let file = __dirname + "/" + path;
	fs.readFile("main.html", function(err, content) {
		if (err) {
			res.writeHead(404);
			res.write('File not found!');
		}
		else {
			res.setHeader("X-Content-Type-Options", "nosniff");
			switch (path) {
				case "main.html":
					res.writeHead(200, { "Content-type": "text/html" });
					break;			
			}
			//res.write(data);
		}
		res.end();
	});
	*/
	/*
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
	*/
});

server.listen(3000, "localhost", () => console.log('ok'));



/*
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
*/