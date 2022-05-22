const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "nowplaying",
    description: "Shows the song that is playing",
    usage: "",
    aliases: ["np"],
    type: "music",
    cooldown: 3,

    execute(message, args, client) {
        let guildQueue = client.player.getQueue(message.guild.id);
        let ProgressBar = guildQueue.createProgressBar();

        let npembed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("💿 Now Playing...")
            .setDescription(`${guildQueue.nowPlaying}\n${ProgressBar.prettier}`)
            .setTimestamp()

        message.channel.send({ embeds: [npembed] })

    }
}
