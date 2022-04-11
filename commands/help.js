const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    aliases: ["commands"],
    cooldown: 10,

    execute(message, args, client) {
        let catagory = args[0].toLowerCase()
        i = 0

        let helpembed = new MessageEmbed()
            .setTitle(`${catagory} commands`)

        commands = client.commands
        for (let command of commands) {
            if (command.type === catagory) {
                helpembed.addField({ name: command.name, value: command.description, inline: true })
            }
            i += 1
            if (i = 3) {
                helpembed.addField({ name: '\u200B', value: '\u200B' })
                i = 1
            }
        }

        message.channel.send({ embeds: [helpembed] })
    }
}