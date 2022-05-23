const { MessageEmbed } = require("discord.js")
const Captcha = require("@haileybot/captcha-generator");

module.exports = {
    name: "roleall",
    usage: "<role>",
    aliases: ["giveroles"],
    description: "Give everyone in the server a role",
    cooldown: "10",

    async execute(message, args, client) {
        if (!args[0]) return message.reply("Please mention a role!")
        if (!message.member.permissions.has('MANAGE_SERVER')) return message.reply("You dont have enough permissions for this command!")

        let r = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])

        message.guild.members.forEach(m => {
            m.roles.add(r)
            message.channel.send(`<@${m.id}> was added to <@&${r.id}>`)
            .then(msg => {
                setTimeout(() => msg.delete(), 1000)
            })
        });
    }
}