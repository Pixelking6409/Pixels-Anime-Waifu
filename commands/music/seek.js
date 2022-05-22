const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "seek",
    description: "Fast fowards to a time in the song",
    usage: "<sec>",
    type: "music",
    cooldown: 3,

    execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        if (!args[0]) return message.reply("Please specify a time!")

        let seekembed = new MessageEmbed()
            .setTitle("Song Seek")
            .setDescription("Song seeked to " + args[0] * 1000)
            .setColor("GREEN")
            .setFooter({ text: "Requested by " + message.author.username, iconURL: message.author.displayAvatarURL() })

        try {
            guildQueue.seek(parseInt(args[0]) * 1000);
            message.channel.send({ embeds: [seekembed] })
        } catch (e) {
            message.reply("I had trobule executing that command!")
        }
    }
}