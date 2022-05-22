const { MessageEmbed } = require('discord.js');
const { RepeatMode } = require('discord-music-player');

module.exports = {
    name: "loop",
    description: "Loops the song thats playing",
    usage: "",
    type: "music",
    cooldown: 3,

    execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        guildQueue.setRepeatMode(RepeatMode.SONG);

        let loopembed = new MessageEmbed()
            .setTitle("Song Loop")
            .setDescription("This song is now looped")
            .setColor("GREEN")
            .setFooter({ text: "Requested by " + message.author.username, iconURL: message.author.displayAvatarURL() })

        message.channel.send({ embeds: [loopembed] })

    }
}