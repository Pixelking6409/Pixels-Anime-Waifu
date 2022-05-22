const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "remove",
    description: "Removes a song",
    usage: "<number>",
    type: "music",
    cooldown: 3,

    execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        try {
            guildQueue.remove(parseInt(args[0]));
        } catch {
            message.reply("Thats not right try again")
        }

        let removeembed = new MessageEmbed()
            .setTitle("Song Removed")
            .setDescription("The song was removed by " + message.author.username)
            .setColor("RED")
            .setFooter({ text: "Requested by " + message.author.username, iconURL: message.author.displayAvatarURL() })

        message.channel.send({ embeds: [removeembed] })

    }
}