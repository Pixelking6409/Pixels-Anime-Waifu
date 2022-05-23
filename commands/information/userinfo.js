const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "userinfo",
    description: "Get information on a user",
    usage: "<user>",
    aliases: ["whois", "info", "memberinfo"],
    type: "information",
    cooldown: 5,

    execute (message, args, client) {
        let targetMember =  message.guild.members.cache.get(args[0]) || message.mentions.members.first()
        let targetUser = client.users.cache.get(args[0]) || message.mentions.users.first()
        let string = ""
        
        targetMember.roles.cache.forEach(role => {
            string += `<@&${role.id}>, `
        })

        let userInfo = new MessageEmbed()
            .setTitle(`${targetUser.username} Information`)
            .addFields(
                { name: "👨‍🦲 User Tag", value: `${targetUser.tag}`, inline: true },
                { name: "🔢 User ID", value: `${targetUser.id}`, inline: true },
                { name: "📆 Joined Date", value: `${targetMember.joinedAt}`, inline: true },
                { name: '\u200B', value: '\u200B'},
                { name: "📆 Created On", value: `${targetUser.createdAt}`, inline: true },
                { name: "🖼 User Avatar", value: `[Link Here](${targetUser.avatarURL()})`, inline: true },
                { name: "🧻 Roles", value: `${string}`, inline: true },
            )
            .setFooter({ text: "Requested by " + message.author.username,  iconURL: message.author.displayAvatarURL() })
            .setTimestamp()
            .setColor("GREEN")

        message.channel.send({ embeds: [userInfo] })
    }
}