const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "verify",
    description: "Verify yourself to enter the discord server",
    cooldown: "10",

    execute(message, args, client) {
        message.delete()

        if (message.channel.id != 977877261053222967) return;

        let verifyembed = new MessageEmbed()
            .setTitle("Pixelater Verification")
            .setDescription(`[Click here to begin](https://unfair.top/verify/?id=${message.author.id})`)
            .setFooter({ text: "Verification started for " + message.author.username, iconURL: message.author.displayAvatarURL() })
            .setColor("WHITE")

        message.author.send({ embeds: [verifyembed] })
    }
}