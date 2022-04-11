const { MessageEmbed } = require('discord.js');
const fs = require("fs");

module.exports = {
    name: "help",
    aliases: ["commands"],
    cooldown: 10,

    execute(message, args, client) {
        let catagory = args[0].toLowerCase()
        let prefix = client.prefix

        if (!catagory) {

        } else {
            let helpembed = new MessageEmbed()
                .setTitle(`${catagory.charAt(0).toUpperCase() + str.slice(1)} commands`)
                .setColor("RED")


            let string = '';
            client.commands.forEach(command => {
                console.log(command)
                if (command.usage === catagory) {
                    string += `**${prefix}${command.name}**  ${command.usage}\n${command.description}\n`
                }
            })

            helpembed.setDescription(string)
            message.channel.send({ embeds: [helpembed] })
        }
    }
}