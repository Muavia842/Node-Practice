const http = require('http');
const app = require('./app');

http
  .createServer((req, resp) => {
    resp.write('hello muavia my first program in in node server prot 5000');
    resp.end();
  })
  .listen(5000);

console.log('muavia haidir');
function myname() {
  return console.log('my first program in node js ');
}
myname();

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// dusri file sy data import krny k leay

const app = require('./app');
console.log(app.x + app.y);
