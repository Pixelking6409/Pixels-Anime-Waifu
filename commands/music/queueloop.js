const { MessageEmbed } = require('discord.js');
const { RepeatMode } = require('discord-music-player');

module.exports = {
    name: "queueloop",
    description: "Loops the queue",
    usage: "",
    type: "music",
    cooldown: 3,

    execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        guildQueue.setRepeatMode(RepeatMode.QUEUE);

        let queueloopembed = new MessageEmbed()
            .setTitle("Queue Loop")
            .setDescription("Loop has started for the queue")
            .setColor("GREEN")
            .setFooter({ text: "Requested by " + message.author.username, iconURL: message.author.displayAvatarURL() })
            .setTimestamp()

        message.channel.send({ embeds: [queueloopembed] })

    }
}