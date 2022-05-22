const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "eval",

    execute (message, args, client) {
        if (message.author.id !== "330570656792182785") return;
        try {
            let input = args.join(" ")
            let output = eval(input)

            let evalembed = new MessageEmbed()
                .setColor("RED")
                .setTitle("Eval")
                .addField("📥Input", `\`\`\`${input}\`\`\``)
                .addField("📤Output", `\`\`\`${output}\`\`\``)
            
            message.channel.send({ embeds: [evalembed] })
        } catch(e) {
            message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
        }
    }
}