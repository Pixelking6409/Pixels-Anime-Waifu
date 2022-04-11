const { MessageEmbed } = require('discord.js');
const fs = require("fs");

module.exports = {
    name: "help",
    aliases: ["commands"],
    cooldown: 10,

    execute(message, args, client) {
        let catagory = args[0].toLowerCase()
        if (!catagory) {

        } else {
            let helpembed = new MessageEmbed()
                .setTitle(`${catagory} commands`)
                .setColor("RED")


            let string = '';
            client.commands.forEach(command => {
                console.log(command)
                string += `**${command.name}**  ${command.usage}\n${command.description}`
            })

            helpembed.setDescription(string)
            message.channel.send({ embeds: [helpembed] })
        }
    }
}