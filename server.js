const net = require('net');
const fs = require('fs');

const PORT = 3000;
const files = ['example1.txt', 'example2.txt'];

const server = net.createServer(client => {
  console.log('client connected');
  client.on('end', () => {
    console.log('client disconnected');
  })
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})

server.on('connection', client => {
  client.setEncoding('utf-8');
  client.on('data', data => {
    for (file of files) {
      if (data === file) {
        fs.readFile(file, (error, content) => {
          if (error) {
            client.write('An error occured while reading the file')
          }
          client.write(content);
        })
        return;
      }
    }
    client.write(`${data} is not found`);
  })
})