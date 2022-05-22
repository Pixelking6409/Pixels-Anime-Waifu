const { Collection, MessageEmbed } = require('discord.js');
const cooldowns = new Collection();

module.exports = {
    name: 'messageCreate',
    async execute(message, client) {
        const prefix = client.prefix
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandName = args.shift().toLowerCase();
        if (message.content.charAt(0) != prefix) return;

        const command = client.commands.get(commandName) || client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;

        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Collection());
        }

        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownAmount = (command.cooldown || 1) * 1000;

        if (timestamps.has(message.author.id)) {
            const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

            if (now < expirationTime) {
                const timeLeft = (expirationTime - now) / 1000;
                let timeout = new MessageEmbed()
                    .setDescription(`❌ Wait ${timeLeft.toFixed(1)} to use ${command.name} again.`)
                    .setColor("RED")
                return message.reply({ embeds: [timeout] });
            }
        }

        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

        try {
            command.execute(message, args, client)
        } catch (error) {
            console.error(error)
            message.reply("There was an error executing that command.").catch(console.error);
        }
    }
}
