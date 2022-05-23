const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "purge",
    description: "Delete's bulk messages in a channel",
    usage: "<number>",
    aliases: ["clear"],
    type: "moderation",
    cooldown: 3,

    async execute(message, args, client) {
        const modchannel = client.channels.cache.get('977877262227611717');

        if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply("You dumbass nigger you cant clear messages!")

        if (!args[0]) return message.reply('Mention a number of messages!')

        try {
            await message.delete()
            await message.channel.bulkDelete(args[0]).then(async (m) => {
                let PurgeEmbed = new MessageEmbed()
                    .setTitle(`✅ Messages was cleared!`)
                    .setDescription(`${args[0]} messages were cleared`)
                    .setFooter({ text: "Cleared by " + message.author.username, iconURL: message.author.displayAvatarURL() })
                    .setTimestamp()
                    .setColor("GREEN")

                message.channel.send({ embeds: [PurgeEmbed] })
                modchannel.send({ embeds: [PurgeEmbed] })
            })
        } catch (e) {
            message.reply(`You can only delete the messages which are not older than 14 days.`)
        }
    }
}