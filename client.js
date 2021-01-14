const net = require('net');

const connect = function(input) {
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000
  });

  conn.setEncoding('utf-8');

  if (input.length != 3) {
    console.log('Include only one request file');
    return;
  }

  const requestFile = input[2];

  conn.on('connect', () => {
    console.log('connection with server is successfully established');
    conn.write(requestFile);
  })

  conn.on('data', (data) => {
    console.log('server returns file data: ', data);
  })

  return conn;
}

const input = process.argv;
connect(input);