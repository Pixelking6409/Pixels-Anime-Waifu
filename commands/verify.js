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
            .setDescription("Enter the text shown in the image below")
            .setFooter({ text: "Verification started for " + message.author.username, iconURL: message.author.displayAvatarURL() })
            .setColor("WHITE")

        let msg = await message.author.send({ embeds: [verifyembed], files: [captcha.JPEGStream] })
        let filter = () => true;
        let answer = await firstMsg.channel.awaitMessages(filter, {
            maxMatches: 1,
            time: 60000
        }).catch(console.log);

        if (!msg.content.toUpperCase() === captcha.value) message.author.send("Verify Failed!");
        message.author.send("Verified Successfully!");

        let r = await message.guild.roles.cache.get("977877260814147621");
        message.member.roles.add(r)
    }
}