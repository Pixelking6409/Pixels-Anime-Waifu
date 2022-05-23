const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "play",
    description: "Add a song to queue",
    usage: "<song>",
    aliases: ["p", "start"],
    type: "music",
    cooldown: 3,

    async execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);

        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.play(args.join(' ')).catch(_ => {
            if (!guildQueue)
                queue.stop();
        });

        let playembed = new MessageEmbed()
            .setTitle("Play Request")
            .setDescription(`${message.author.username} requested ${song}`)
            .setFooter({ text: "Requested by " + message.author.username,  iconURL: message.author.displayAvatarURL() })
            .setColor("GREEN")
            .setTimestamp()

        message.channel.send({ embeds: [playembed] })
    }
}