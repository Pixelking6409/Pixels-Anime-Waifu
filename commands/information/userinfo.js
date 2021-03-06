const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "userinfo",
    description: "Get information on a user",
    usage: "<user>",
    aliases: ["whois", "info", "memberinfo"],
    type: "information",
    cooldown: 5,

    execute (message, args, client) {
        let targetMember =  message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.member
        let targetUser = client.users.cache.get(args[0]) || message.mentions.users.first() || message.author

        let string = ""
        
        targetMember.roles.cache.forEach(role => {
            string += `<@&${role.id}>, `
        })

        let userInfo = new MessageEmbed()
            .setTitle(`${targetUser.username} Information`)
            .setThumbnail(targetUser.displayAvatarURL())
            .addFields(
                { name: "๐จโ๐ฆฒ User Tag", value: `${targetUser.tag}`, inline: true },
                { name: "๐ข User ID", value: `${targetUser.id}`, inline: true },
                { name: "๐ Joined Date", value: `${targetMember.joinedAt}`, inline: true },
                { name: '\u200B', value: '\u200B'},
                { name: "๐ Created On", value: `${targetUser.createdAt}`, inline: true },
                { name: "๐ผ User Avatar", value: `[Link Here](${targetUser.avatarURL()})`, inline: true },
                { name: "๐งป Roles", value: `${string}`, inline: true },
            )
            .setFooter({ text: "Requested by " + message.author.username,  iconURL: message.author.displayAvatarURL() })
            .setTimestamp()
            .setColor("GREEN")

        message.channel.send({ embeds: [userInfo] })
    }
}