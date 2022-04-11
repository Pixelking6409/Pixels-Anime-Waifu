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
            fs.readdir(`./commands/${catagory}`, (err, files) => {
                if (err) console.error(err);
                let commands = files.filter(f => f.split(".").pop() === "js");

                let helpembed = new MessageEmbed()
                    .setTitle(`${catagory} commands`)
                    .setColor("RED")

                
                let string = '';
                commands.forEach((f, i) => {
                    command = client.commands.get()
                    string += `**${command.name}**  ${command.usage}\n${command.description}`
                })

                helpembed.setDescription(string)
                message.channel.send({ embeds: [helpembed] })
            }
        }
    }
}