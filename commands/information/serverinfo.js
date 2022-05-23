const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "serverinfo",
    description: "Get information on a user",
    usage: "<user>",
    aliases: ["guildinfo"],
    type: "information",
    cooldown: 5,

    execute (message, args, client) {
        let targetGuild = message.guild

        let string = ""
        
        targetGuild.roles.cache.forEach(role => {
            string += `<@&${role.id}>, `
        })

        let userInfo = new MessageEmbed()
            .setTitle(`${message.guild.name} Information`)
            .setThumbnail(message.guild.iconURL)
            .addFields(
                { name: "👨‍🦲 Server Name", value: `${targetGuild.name}`, inline: true },
                { name: "🔢 Server ID", value: `${targetGuild.id}`, inline: true },
                { name: "📆 Created On", value: `${targetMember.createdAt}`, inline: true },
                { name: '\u200B', value: '\u200B'},
                { name: "👥 Member Count", value: `${targetGuild.memberCount}`, inline: true },
                { name: "👑 Server Owner", value: `<@${targetGuild.ownerId}>`, inline: true },
                { name: "🧻 Roles", value: `${string}`, inline: true },
            )
            .setFooter({ text: "Requested by " + message.author.username,  iconURL: message.author.displayAvatarURL() })
            .setTimestamp()
            .setColor("GREEN")

        message.channel.send({ embeds: [userInfo] })
    }
}