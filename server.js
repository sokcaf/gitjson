let http = require('http')
let fs = require('fs')
let port = process.env.PORT || 3000;

http.createServer((req, res) => {
  let server_details = {
    domain: 'https://gitjson.com',
    repository: 'https://github.com/sokcaf/gitjson.git',
    email: ['wearesokcaf@gmail.com', 'ty@kcborn.com']
  }

  res.end(JSON.stringify(server_details))
}).listen(port, '127.0.0.1', () => {
  console.log(`Server started on port: ${port}`)
})

