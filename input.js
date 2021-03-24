const { MOVE_KEYS } = require('./constants'); 
let connection;

const setupInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', (key) => {
        handleUserInput(key);
    });
    return stdin;
};

const handleUserInput = function(key){
        if (key === '\u0003') {
            process.exit();
          }
        for(let move in MOVE_KEYS){
            if(key === move){
                connection.write(MOVE_KEYS[move]);
            }
        }
};

module.exports = { setupInput };