const cmd = require("./cmd");

const entrypoint = async () => {
    await cmd.execute("yarn install");
    await cmd.execute("yarn start");
}

entrypoint();