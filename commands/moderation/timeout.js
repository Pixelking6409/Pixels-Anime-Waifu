const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "timeout",
    description: "Puts a user in timeout",
    usage: "<user> <seconds> <reason>",
    aliases: ["mute"],
    type: "moderation",
    cooldown: 3,

    execute(message, args, client) {
        const target = message.mentions.members.first()
        const time = args[1]
        const reason = args.slice(2).join(" ")
        const modchannel = client.channels.cache.get('977877262449913867');

        if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) return message.reply("You dumbass nigger you cant time people out!")

        if (!args[0]) return message.reply('Mention someone to timeout!')

        if (!reason) reason = "undefined"

        if (!target) return message.reply('I can\'t find that member!')

        target.timeout({ timeout: time * 1000, reason: reason })

        let TimeoutEmbed = new MessageEmbed()
            .setTitle(`✅ ${target.username} was Timed out!`)
            .setDescription(`${taget.username} was timed out for ${reason}`)
            .setFooter({ text: "Timed out by " + message.author.username,  iconURL: message.author.displayAvatarURL() })
            .setTimestamp()

        message.channel.send({ embeds: [TimeoutEmbed] })
        modchannel.send({ embeds: [KickEmbed] })
    }
}