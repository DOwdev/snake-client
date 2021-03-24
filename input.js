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
    let moves = [
        'Move: up', 
        'Move: down',
        'Move: left',
        'Move: right'
    ];
        if (key === '\u0003') {
            process.exit();
          }
        if(key === 'w'){
            connection.write(moves[0]);
        }
        if(key === 's'){
            connection.write(moves[1]);
        }
        if(key === 'a'){
            connection.write(moves[2]);
        }
        if(key === 'd'){
            connection.write(moves[3]);
        }
};

module.exports = { setupInput };