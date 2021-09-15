const process = require('child_process');

const spawnOpts = {
    shell: true
};

function execute (command) {
    return new Promise((resolve, reject) => {
        const cmd = process.spawn(command, spawnOpts);
        
        cmd.stdout.on('data', function(output) {
            console.info(output.toString());
        });
        
        cmd.on('close', function() {
            resolve();
        });
        
        //Error handling
        cmd.stderr.on('data', function(error) {
            console.error(error);
            reject();
        });
    });
}

module.exports = {
    execute
}

