const UserBalance = require("../../schema/money")

module.exports = {
    name: "balance",
    description: "Get a users balance",
    usage: "<user>",
    aliases: ["bal", "money"],
    type: "economy",
    cooldown: 3,

    async execute(message, args) {
        let member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author

        let data;
        try {
            data = await UserBalance.findOne({ userID: member.id });
            if (!data) {
                let newdata = await UserBalance.create({
                    userID: member.id,
                    balance: 1000,
                });
                newdata.save();
            }
        } catch (err) {
            console.log(err);
        }

        message.channel.send(`${member.username} has ${data.Balance}`)
    }
}