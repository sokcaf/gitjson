let http = require('http')
let fs = require('fs')

http.createServer((req, res) => {
  let json_obj = {
    firstName: 'Tyler',
    lastName: 'Carolan',
    email: ['wearesokcaf@gmail.com']
  }

  res.end(JSON.stringify(json_obj))
}).listen(1337, '127.0.0.1')

