const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "pause",
    description: "Pause the current song",
    usage: "",
    type: "music",
    cooldown: 3,

    execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        guildQueue.setPaused(true);

        let pauseembed = new MessageEmbed()
            .setTitle("Song Paused")
            .setDescription("Song was paused by " + message.author.username)
            .setColor("RED")
            .setTimestamp()
            .setFooter({ text: "Requested by " + message.author.username, iconURL: message.author.displayAvatarURL() })

        message.channel.send({ embeds: [pauseembed] })

    }
}