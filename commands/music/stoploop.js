const { MessageEmbed } = require('discord.js');
const { RepeatMode } = require('discord-music-player');

module.exports = {
    name: "stoploop",
    description: "Stops bot from looping a song and playlist",
    usage: "",
    aliases: ["cancelloop", "unloop"],
    type: "music",
    cooldown: 3,

    execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        guildQueue.setRepeatMode(RepeatMode.DISABLED);

        let loopembed = new MessageEmbed()
            .setTitle("Queue/Song Loop")
            .setDescription("Loop has stopped")
            .setColor("RED")
            .setFooter({ text: "Requested by " + message.author.username, iconURL: message.author.displayAvatarURL() })

        message.channel.send({ embeds: [loopembed] })

    }
}