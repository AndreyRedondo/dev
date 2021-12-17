/* // Path

const path = require("path");
const objPath = path.parse(__filename);
console.log(objPath); */

/* // OS
const os = require("os");
let memoriaLibre = os.freemem();
let memoriaTotal = os.totalmem();
console.log(memoriaLibre);
console.log(memoriaTotal); */

/* // FileSystem
const fs = require("fs");
const files = fs.readdirSync("./");
console.log(files);
fs.readdir("./", function (err, files) {
  if (err) console.log("Error", err);
  else console.log("Resultado", files);
}); */
const fs = require("fs");
let data = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

fs.writeFile( "file.txt", data, (err) => {
    if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("file.txt", "utf8")); 
  }
})

/* // Events
const EventEmitter = require('events');
const emitter =  new EventEmitter();

emitter.on('mensajeLogger', function(){
    console.log('Llamando.....');
})

emitter.emit('mensajeLogger') */

// HHTP
/* const http = require('http');
const server = http.createServer((req, res) =>{
    if(req.url == '/'){
        res.write('Index')
        res.end();
    }
    if(req.url == '/user'){
        res.write('Users');
        res.end();
    }
    if(req.url == '/api'){
        res.write(JSON.stringify(['mouse', 'keyboard', 'monitor']));
        res.end();
    }
}); */

/* server.on('connection', (port)=>{
    console.log('Nueva coneccion.....');
}) */

/* server.listen(3000);

console.log('Server running on port 3000'); */
