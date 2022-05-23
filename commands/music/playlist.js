const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "playlist",
    description: "Add a playlist to queue",
    usage: "<playlist>",
    type: "music",
    cooldown: 3,

    async execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.playlist(args.join(' ')).catch(_ => {
            if (!guildQueue)
                queue.stop();
        });

        let playlistembed = new MessageEmbed()
            .setTitle("Playlist Request")
            .setDescription(`${message.author.username} requested a number of songs`)
            .setFooter({ text: "Requested by " + message.author.username,  iconURL: message.author.displayAvatarURL() })
            .setColor("GREEN")
            .setTimestamp()

        message.channel.send({ embeds: [playlistembed] })
    }
}