const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "skip",
    description: "Fast fowards to a time in the song",
    usage: "",
    aliases: ["s"],
    type: "music",
    cooldown: 3,

    execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        guildQueue.skip();

        let skipembed = new MessageEmbed()
            .setTitle("Song Skip")
            .setDescription("Song skipped by " + message.author.username)
            .setColor("GREEN")
            .setFooter({ text: "Requested by " + message.author.username, iconURL: message.author.displayAvatarURL() })

        message.channel.send({ embeds: [skipembed] })
    }
}