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
            const filter = m => m.author.id === message.author.id;
            msg.channel.awaitMessages({ filter, max: 1, time: 20000, errors: ['time'] })
                .catch(() => {
                    message.author.send('Please try again and answer in 20 seconds!');
                })
                .then(collected => {
                    let answer = collected.first().content

                    if (answer.toUpperCase() === captcha.value) {
                        let r = message.guild.roles.cache.get("977877260814147621")
                        let r2 = message.guild.roles.cache.get("977877260839301165")
                        message.member.roles.add(r)
                        message.member.roles.add(r2)
                        message.author.send('Verified Successfully!');
                    } else {
                        message.author.send(`Verify Failed! You answered ${answer}. The right answer is ${captcha.value}. \n Try Again!`);
                    }
                });
        } catch (e) {
            console.log(e)
        }
    }
}