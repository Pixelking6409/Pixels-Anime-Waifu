const UserBalance = require("../../schema/money.js/")

module.exports = {
    name: "balance",
    description: "Get a users balance",
    usage: "<user>",
    aliases: ["bal", "money"],
    type: "economy",
    cooldown: 3,

    execute(message, args) {
        let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author

        let data = UserBalance.findOne({ User: member.id }) 

        if (!data) {
            let data = new UserBalance(
                {
                    User: member.id,
                    Balance: 0,
                }
            )
            data.save()
        }

        message.channel.send(`${member.username} has ${data.Balance}`)
    }
}