const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "avatar",
    description: "Get information on a user",
    usage: "<user>",
    aliases: ["image", "pfp"],
    type: "information",
    cooldown: 5,

    execute (message, args, client) {
        let targetMember =  message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.author

        let userAvatar = new MessageEmbed()
            .setTitle(`${targetUser.username} Information`)
            .setImage(targetUser.displayAvatarURL())
            .setFooter({ text: "Requested by " + message.author.username,  iconURL: message.author.displayAvatarURL() })
            .setTimestamp()
            .setColor("GREEN")

        message.channel.send({ embeds: [userAvatar] })
    }
}