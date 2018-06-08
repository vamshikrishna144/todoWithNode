//Node events

// const util = require('util');
// const eventEmitter = require('events').EventEmitter;
//
// const Person = function(person) {
//   this.person = person;
// }
//
// util.inherits(Person, eventEmitter);
//
// var Vamshi = new Person('Vamshi');
//
// Vamshi.on('speak', function(message) {console.log(message)})
//
// Vamshi.emit('speak', 'whats up guys');


//Node file System module - to read and write to files

// const fs  = require('fs')

// fs.unlink - delete a file
//fs.mkdir, rmdir, readFile, writeFile, readFileSync, writeFileSync etc are the methods available
//
// var readMe = fs.readFileSync('README.md', 'utf8')
// console.log(readMe)
// console.log(typeof(readMe))

//Creating a server
// var http = require('http');
// var server = http.createServer(handler);
//
// function handler(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'})
//   res.end('Node is awesome')
// }
//
// server.listen('3000', '127.0.0.1');
// console.log('Listening on port 3000')

//Streams and buffers
//
// const fs  = require('fs')
//
// const myReadableStream = fs.createReadStream(__dirname + '/README.md', 'utf8');
// const writeSteam = fs.createWriteStream(__dirname + '/WRITING.md', 'utf8');
//
// myReadableStream.on('data', function(chunk) {
//   console.log(chunk)
//   writeSteam.write(chunk);
// })

//More faster way to read and write is using pipes

const fs  = require('fs')

var http = require('http')
var server = http.createServer(handler)

function handler(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  const myReadableStream = fs.createReadStream(__dirname + '/README.md', 'utf8');
  myReadableStream.pipe(res)
}

server.listen('3000', '127.0.0.1');
console.log('Listening on port 3000')
