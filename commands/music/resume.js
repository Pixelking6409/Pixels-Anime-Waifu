const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "resume",
    description: "Starts the current song",
    usage: "",
    type: "music",
    cooldown: 3,

    execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        guildQueue.setPaused(false);

        let resumeembed = new MessageEmbed()
            .setTitle("Song Resumed")
            .setDescription("Song was resumed by " + message.author.username)
            .setColor("GREEN")
            .setFooter({ text: "Requested by " + message.author.username, iconURL: message.author.displayAvatarURL() })

        message.channel.send({ embeds: [resumeembed] })

    }
}