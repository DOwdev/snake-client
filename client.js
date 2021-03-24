const net = require('net');

const connect = function() {
    const conn = net.createConnection({ 
      host: '192.168.2.17',
      port: 50541
    });
    // interpret incoming data as text
    conn.setEncoding('utf8'); 
    conn.on('connect', () => {
        console.log("Successfully connected to game server");
        conn.write('Name: DOB');
    });
    conn.on('data', (data) => {
        console.log(data);
      });
    return conn;
}

module.exports = {connect};