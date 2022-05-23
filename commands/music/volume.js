const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "volume",
    description: "Change bot volume",
    usage: "<number>",
    aliases: ["v"],
    type: "music",
    cooldown: 3,

    execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        if (!args[0]) return message.reply("Volume is at " + guildQueue.volume)
        guildQueue.setVolume(parseInt(args[0]));

        let volumeembed = new MessageEmbed()
            .setTitle("Bot Volume")
            .setDescription("Volume set to " + args[0])
            .setColor("GREEN")
            .setFooter({ text: "Requested by " + message.author.username,  iconURL: message.author.displayAvatarURL() })
            .setTimestamp()

        message.channel.send({ embeds: [volumeembed] })
    }
}