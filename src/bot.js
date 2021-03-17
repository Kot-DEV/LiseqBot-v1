const discord = require('discord.js')
const fs = require('fs');
const colors = require('colors');
const config = require('./config.js');
const bot = new discord.Client();
var serwy = bot.guilds.cache.size;
const moment = require('moment');
require('moment-duration-format')


bot.on("ready", async () => {
    console.log(`${bot.user.username} zostal wlaczony!`);

    setInterval(() => {
        const duration = moment.duration(bot.uptime).format("D [Dni], H [Godzin], m [Minut], s [Sekund]");
        const activities_list = [
            `Ilosc serwerow bota: ${serwy}`,
            "Napisz l!pomoc aby dostac pomoc",
            `Jestem online: ${duration}`
        ]        
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        bot.user.setActivity(activities_list[index]);
    }, 5000);
});

bot.commands = new discord.Collection();
fs.readdir('./src/commands', (err, files) => { 

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Nie mozna znalezc zadnych komend".red);
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./src/commands/${f}`);
        console.log(`${f} zaladowane!`.yellow);
        bot.commands.set(props.help.name, props);
    });
    console.log('Wszystkie komendy zostaly zaladowane!'.green);
});


bot.on("message", async(message) => {
    if (message.content.startsWith(config.prefix)) {
        let prefix = config.prefix;
        let messageArray = message.content.split(" ");
        let command = messageArray[0].toLowerCase();
        let args = messageArray.slice(1);
        let cmd = bot.commands.get(command.slice(prefix.length));
        if (cmd) {
            if(message.channel.type === 'dm') return;
            console.log("Osoba o nicku ".yellow + message.author.username.white + " uzyla komendy ".yellow + message.content.white + " \n Na serwerze ".yellow + message.guild.name.white);
            cmd.run(bot, message, args);
            message.react('775412540439920640');
        } else {
            message.react('775407239790854214');
        } 
    } 

});


bot.on('message', message => {
    if(config.token === 'NzkyNDg2OTA5OTU1ODAxMTEw.X-ea8w.hht66FDNhcWMTD6gWT7hS3lAZ_k') return;
    if(message.author.bot) return;
    if(message.content.toLowerCase().includes("liseqbot") || message.content.toLowerCase().includes("bocie!")) {
        message.channel.send("Wpisz l!pomoc aby zobaczyc pomoc!")
    } else if(message.content.toLowerCase().includes("uwu")) {
        
        message.channel.send("owo")
    } else if(message.content.toLowerCase().includes("owo")) {
        message.channel.send("uwu")
    }                                                  
});


bot.login(config.token); 

bot.on('messageReactionAdd', async(reakcja, user) => {
   if(reakcja.message.partial) await reakcja.message.fetch();
   if(reakcja.partial) await reakcja.fetch();
   if(user.bot) return;
   if(!reakcja.message.guild) return;
   if(!reakcja.message.author.bot) return;
   if(reakcja)
   if(reakcja.emoji.name === '🎱') {
        reakcja.message.embeds.some((item) => {
            if(item.title.includes("Pomoc")) {
                const e = new discord.MessageEmbed()
                .setTitle('4fun')
                .setDescription('l!8ball \n l!ascii \n l!avatar \n l!cytat \n l!koszt \n l!liczba \n l!mchead \n l!lis \n l!miś \n l!obrazek \n l!triggered \n l!kalkuluj \n l!facepalm')
                 reakcja.message.channel.send(e); 
        }});
    } else if(reakcja.emoji.name === '🔨') {
        reakcja.message.embeds.some((item) => {
            if(item.title.includes("Pomoc")) {
                const e = new discord.MessageEmbed()
                .setTitle('Moderacyjne')
                .setDescription('l!ban \n l!clear \n l!kick \n l!nuke \n l!say')
                reakcja.message.channel.send(e);
            }});
        } else if(reakcja.emoji.name === 'ℹ️') {
            reakcja.message.embeds.some((item) => {
                const e = new discord.MessageEmbed()
                .setTitle('Informacyjne')
                .setDescription('l!bot \n l!pomoc \n l!server-info \n l!status')
                reakcja.message.channel.send(e);
            });
        }
        reakcja.message.reactions.removeAll();
        reakcja.message.delete();
});


 