const { MessageEmbed } = require("discord.js")
const Captcha = require("@haileybot/captcha-generator");

module.exports = {
    name: "verify",
    description: "Verify yourself to enter the discord server",
    cooldown: "10",

    async execute(message, args, client) {
        message.delete()

        if (message.channel.id != 977877261053222967) return;

        let captcha = new Captcha();

        let verifyembed = new MessageEmbed()
            .setTitle("Pixelater Verification")
            .setDescription("Enter the text shown in the image above")
            .setFooter({ text: "Verification started for " + message.author.username, iconURL: message.author.displayAvatarURL() })
            .setColor("WHITE")

        const msg = await message.author.send({ embeds: [verifyembed], files: [captcha.JPEGStream] })
        try {
            const filter = collected => collected.author.id === message.author.id;
            const collected = await msg.channel.awaitMessages({
                filter,
                max: 1,
                time: 50000,
            }).catch(() => {
                message.author.send('Timeout');
            });

            let answer = collected.first().content

            console.log(answer)

            if (answer.toUpperCase() === captcha.value) { 
                message.author.send("Verified Successfully!")
                let r = message.guild.roles.cache.get("977877260814147621")
                message.member.roles.add(r)
            } else {
                message.author.send("Verify Failed!")
            }
        } catch(e) {
            console.log(e)
        }
    }
}