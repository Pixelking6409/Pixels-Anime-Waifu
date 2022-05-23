const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "clearqueue",
    description: "Clear the bots queue",
    usage: "",
    aliases: ["clear"],
    type: "music",
    cooldown: 3,

    execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        guildQueue.clearQueue();

        let clearembed = new MessageEmbed()
            .setTitle("Queue Cleared")
            .setDescription("Queue was cleared by " + message.author.username)
            .setColor("RED")
            .setTimestamp()
            .setFooter({ text: "Requested by " + message.author.username, iconURL: message.author.displayAvatarURL() })

        message.channel.send({ embeds: [clearembed] })

    }
}