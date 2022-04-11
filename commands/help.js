const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "help",
    aliases: ["commands"],
    cooldown: 10,

    execute(message, args, client) {
        let catagory = args[0].toLowerCase()

        let helpembed = new MessageEmbed()
            .setTitle(`${catagory} commands`)
            .setColor("RED")

        commands = client.commands
        let string = '';
        for (let command of commands) {
            if (command.type === catagory) {
                string += `\`\`\`${command.name}\`\`\`  ${command.usage}\n${command.description}`
            }
        }
        helpembed.setDescription(string)

        message.channel.send({ embeds: [helpembed] })
    }
}