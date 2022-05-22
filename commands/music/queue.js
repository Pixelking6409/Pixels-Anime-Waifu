const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "queue",
    description: "View guild queue",
    usage: "",
    aliases: ["q", "list"],
    type: "music",
    cooldown: 3,

    execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        let queueembed = new MessageEmbed()
            .setTitle("Pixel's Bitch Boy Queue")
            .setColor("GREEN")
            .setFooter({ text: "Requested by " + message.author.username,  iconURL: message.author.displayAvatarURL() })

        let songs = guildQueue.songs
        let string = '';
        let i = 0

        for (let song of songs) {
            i += 1
            string += `**[${i}]** [${song.name}](https://www.youtube.com/watch?v=dQw4w9WgXcQ) \n`
        }

        queueembed.setDescription(string)
        message.channel.send({ embeds: [queueembed] })
    }
}