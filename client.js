const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000
  });

  conn.setEncoding('utf-8');

  conn.on('connect', () => {
    console.log('connection with server is successfully established');
    conn.write('example2.txt');
  })

  conn.on('data', (data) => {
    console.log('server says: ', data);
  })

  return conn;
}

connect();