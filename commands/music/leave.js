const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "leave",
    description: "Stops bot from playing music",
    usage: "",
    aliases: ["fuckoff", "l", "goaway", "stop"],
    type: "music",
    cooldown: 3,

    execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        guildQueue.stop();

        let leaveembed = new MessageEmbed()
            .setTitle("Bot Leave")
            .setDescription("Music bot has left the channel")
            .setColor("RED")
            .setFooter({ text: "Requested by " + message.author.username, iconURL: message.author.displayAvatarURL() })

        message.channel.send({ embeds: [leaveembed] })

    }
}