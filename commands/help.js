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
            let helpembed = new MessageEmbed()
                .setTitle(`${client.user.username} commands`)
                .setColor("RED")
                .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())

            
            
        } else {
            let showncatagory = catagory.charAt(0).toUpperCase() + catagory.slice(1)

            let helpembed = new MessageEmbed()
                .setTitle(`${showncatagory} commands`)
                .setColor("RED")
                .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())


            let string = '';
            client.commands.forEach(command => {
                console.log(command)
                if (command.type === catagory) {
                    string += `**${prefix}${command.name}**  ${command.usage}\n${command.description}\n`
                }
            })

            helpembed.setDescription(string)
        } 
        message.channel.send({ embeds: [helpembed] })
    }
}