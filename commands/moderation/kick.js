const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "kick",
    description: "Kicks a user from the Discord Server",
    usage: "<user> <reason>",
    aliases: ["boot"],
    type: "moderation",
    cooldown: 3,

    execute(message, args, client) {
        const target = message.mentions.members.first()
        const reason = args.slice(1).join(" ")
        const modchannel = client.channels.cache.get('977877262449913867');

        if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply("You dumbass nigger you cant kick people!")

        if (!args[0]) return message.reply('Mention someone to kick!')

        if (!reason) reason = "undefined"

        if (!target) return message.reply('I can\'t find that member!')

        target.kick({ reason: reason })

        let KickEmbed = new MessageEmbed()
            .setTitle(`✅ ${target.username} was Kicked!`)
            .setDescription(`${taget.username} was kicked for ${reason}`)
            .setFooter({ text: "Kicked by " + message.author.username,  iconURL: message.author.displayAvatarURL() })
            .setTimestamp()

        message.channel.send({ embeds: [KickEmbed] })
        modchannel.send({ embeds: [KickEmbed] })
    }
}