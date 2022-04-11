const { MessageEmbed } = require('discord.js');
const fs = require("fs");

module.exports = {
    name: "help",
    aliases: ["commands"],
    cooldown: 10,

    execute(message, args, client) {
        let catagory = args[0]
        let prefix = client.prefix
        let string = '';
        i = 0

        if (!catagory) {
            const helpembed = new MessageEmbed()
                .setTitle(`${client.user.username} commands`)
                .setColor("RED")
                .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())

            const commandSubFolders = fs.readdirSync('./commands/')
            commandSubFolders.forEach(folder => {
                helpembed.addField(`${prefix}${folder}`, `Get help for ${folder} commands`, true)
                i += 1
                if (i = 3) {
                    helpembed.addField('\u200B', '\u200B')
                    i = 0
                }
            });
        } else {
            let showncatagory = catagory.charAt(0).toUpperCase() + catagory.slice(1)

            const helpembed = new MessageEmbed()
                .setTitle(`${showncatagory} commands`)
                .setColor("RED")
                .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())

            client.commands.forEach(command => {
                console.log(command)
                if (command.type === catagory.toLowerCase()) {
                    string += `**${prefix}${command.name}**  ${command.usage}\n${command.description}\n`
                }
            })

            helpembed.setDescription(string)
        }
        message.channel.send({ embeds: [helpembed] })
    }
}