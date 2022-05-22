const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "shuffle",
    description: "Shuffle the queue",
    usage: "",
    type: "music",
    cooldown: 3,

    execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        guildQueue.shuffle();

        let clearembed = new MessageEmbed()
            .setTitle("Queue Shuffled")
            .setDescription("Queue was shuffled by " + message.author.username)
            .setColor("GREEN")
            .setFooter({ text: "Requested by " + message.author.username, iconURL: message.author.displayAvatarURL() })

        message.channel.send({ embeds: [clearembed] })

    }
}