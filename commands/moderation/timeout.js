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
        const targetUser = message.mentions.users.first()
        const time = args[1]
        const reason = args.slice(2).join(" ")
        const modchannel = client.channels.cache.get('977877262227611717');

        if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply("You dumbass nigger you cant time people out!")

        if (!args[0]) return message.reply('Mention someone to timeout!')

        if (!reason) reason = "undefined"

        if (!target) return message.reply('I can\'t find that member!')

        target.timeout(time * 1000, reason)

        let TimeoutEmbed = new MessageEmbed()
            .setTitle(`✅ ${targetUser.username} was Timed out!`)
            .setDescription(`${targetUser.username} was timed out for ${reason}`)
            .setFooter({ text: "Timed out by " + message.author.username,  iconURL: message.author.displayAvatarURL() })
            .setTimestamp()
            .setColor("GREEN")

        message.channel.send({ embeds: [TimeoutEmbed] })
        modchannel.send({ embeds: [TimeoutEmbed] })
    }
}