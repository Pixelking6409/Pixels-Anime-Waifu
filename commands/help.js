const { MessageEmbed } = require('discord.js');
const fs = require("fs");

module.exports = {
    name: "help",
    aliases: ["commands"],
    cooldown: 2,

    execute(message, args, client) {
        let catagory = args[0]
        let prefix = client.prefix
        i = 0

        if (!catagory) {
            let helpembed = new MessageEmbed()
                .setTitle(`${client.user.username} commands`)
                .setColor("RED")
                .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL() })

            const commandSubFolders = fs.readdirSync('./commands/').filter(f => !f.endsWith('.js'))
            console.log(commandSubFolders)
            commandSubFolders.forEach(folder => {
                helpembed.addField(`**${prefix}help ${folder}**`, `Get help for ${folder} commands`, true)
                i += 1
                if (i == 3) {
                    helpembed.addField('\u200B', '\u200B')
                    i = 0
                }
            });
            message.channel.send({ embeds: [helpembed] })
        } else {
            let showncatagory = catagory.charAt(0).toUpperCase() + catagory.slice(1)

            let helpembed = new MessageEmbed()
                .setTitle(`${showncatagory} commands`)
                .setColor("RED")
                .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL() })

            client.commands.forEach(command => {
                if (command.type === catagory.toLowerCase()) {
                    helpembed.addField(`**${prefix}${command.name}**  ${command.usage}`, command.description, true)
                    i += 1
                    if (i == 3) {
                        helpembed.addField('\u200B', '\u200B')
                        i = 0
                    }
                }
            })

            message.channel.send({ embeds: [helpembed] })
        }
    }
}