module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`${client.user.username} is online on ${client.guilds.cache.size} servers!`);
        client.user.setActivity("over you", { type: "WATCHING" })
    }
}