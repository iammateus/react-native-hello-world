const process = require('child_process');

const spawnOpts = {
    shell: true
};

function execute (command) {
    return new Promise((resolve, reject) => {
        const spawnOpts = {
            shell: true
        };
        const cmd = process.spawn(command, spawnOpts);

        const finish = (event, code) => {
            const eventMap = {
                close: "closed",
                exit: "exited"
            }

            console.info(`command "${command}" ${eventMap[event]} with code ${code}`);
            
            if(code > 0) {
                reject(code);
            }
            resolve(code);
        }
        
        cmd.stdout.on('data', function(output) {
            console.info(output.toString());
        });

        cmd.on('close', (code) => {
            finish('close', code);
        });
          
        cmd.on('exit', (code) => {
            finish('exit', code);
        });
        
        //Error handling
        cmd.stderr.on('data', function(error) {
            console.error(error.toString());
        });
    });
}

module.exports = {
    execute
}

