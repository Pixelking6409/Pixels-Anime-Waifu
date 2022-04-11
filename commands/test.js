module.exports = {
    name: "test",
    aliases: ["hello"],
    cooldown: 10,

    execute(message, args) {
        let yes = args[0]
        message.channel.send(`Works ${yes}`)
    }
}