const UserBalance = require("../../schema/money")

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
            let newdata = new UserBalance({
                    User: member.id,
                    Balance: 0,
                })
            newdata.save()
            return message.channel.send(`${member.username} has ${newdata.Balance}`)
        }

        message.channel.send(`${member.username} has ${data.Balance}`)
    }
}