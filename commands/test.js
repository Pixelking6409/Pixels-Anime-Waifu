module.exports = {
    name: "test",
    aliases: ["hello"],
    cooldown: 10,

    execute(message, arg) {
        let yes = arg[1]
        message.channel.send(`Works ${yes}`)
    }
}