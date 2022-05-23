const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "ban",
    description: "Bans a user from the Discord Server",
    usage: "<user> <reason>",
    aliases: ["fuckoff"],
    type: "moderation",
    cooldown: 3,

    execute(message, args, client) {
        const target = message.mentions.members.first()
        const reason = args.slice(1).join(" ")
        const modchannel = client.channels.cache.get('977877262449913867');

        if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply("You dumbass nigger you cant ban people!")

        if (!args[0]) return message.reply('Mention someone to ban!')

        if (!reason) reason = "undefined"

        if (!target) return message.reply('I can\'t find that member!')

        target.ban({ reason: reason })

        let banEmbed = new MessageEmbed()
            .setTitle(`✅ ${target.member.username} was Banned!`)
            .setDescription(`${taget.member.username} was banned for ${reason}`)
            .setFooter({ text: "Banned by " + message.author.username,  iconURL: message.author.displayAvatarURL() })
            .setTimestamp()

        message.channel.send({ embeds: [banEmbed] })
        modchannel.send({ embeds: [banEmbed] })
    }
}