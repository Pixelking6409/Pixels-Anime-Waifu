const { Client, Intents, Collection } = require('discord.js');
const fs = require("fs");

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MEMBERS] });
client.commands = new Collection();
client.config = require("./config.json")
client.prefix = client.config.prefix

const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const cors = require("cors");
app.use(cors());

const { Player } = require("discord-music-player");
const player = new Player(client, {
    leaveOnEmpty: true,
    leaveOnEnd: false,
});
client.player = player;

const commandFiles = fs.readdirSync('./commands/').filter(f => f.endsWith('.js'))
for (const file of commandFiles) {
    const props = require(`./commands/${file}`)
    console.log(`${file} loaded`)
    client.commands.set(props.name, props)
}

const commandSubFolders = fs.readdirSync('./commands/').filter(f => !f.endsWith('.js'))
commandSubFolders.forEach(folder => {
    const commandFiles = fs.readdirSync(`./commands/${folder}/`).filter(f => f.endsWith('.js'))
    for (const file of commandFiles) {
        const props = require(`./commands/${folder}/${file}`)
        console.log(`${file} loaded from ${folder}`)
        client.commands.set(props.name, props)
    }
});

const eventFiles = fs.readdirSync('./events/').filter(f => f.endsWith('.js'))
for (const file of eventFiles) {
    const event = require(`./events/${file}`)
    if(event.once) {
        client.once(event.name, (...args) => event.execute(...args, client))
    } else {
        client.on(event.name, (...args) => event.execute(...args, client))
    }
}

app.use(bodyParser.json());

app.get('/',function(req,res) {
    res.sendFile('./website/index.html');
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/', (req, res) => {
    let id = req.body.id
    verify(id);
});

async function verify(i) {
    try {
        var g = await client.guilds.cache.get("977877260814147614");
        var mem = await g.members.fetch(i)
        var r = await g.roles.cache.get("977877260814147621");
        var member = await client.users.fetch(i)
        
        mem.roles.add(r);

        let verifyedembed = new MessageEmbed()
            .setTitle("✅ You have been verified")
            .setFooter({ text: member.username + " may now enter Pixelater server!", iconURL: member.displayAvatarURL()})
            .setColor("WHITE")

        mem.send({ embeds: [verifyedembed] })
    } catch (e) {
        client.channels.cache.get("944841210462367794").send(`${i} was not verified`)
        console.error(e);
    }
}

const port = process.env.PORT || 3081;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

client.login(process.env.TOKEN)