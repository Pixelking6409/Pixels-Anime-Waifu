module.exports = {
    name: "balance",
    description: "Get a users balance",
    usage: "<user>",
    aliases: ["bal", "money"],
    type: "economy",
    cooldown: 3,

    async execute(message, args, AuthorUserData) {
        let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author

        message.channel.send(`${member.username} has ${UserData.Balance}`)
    }
}