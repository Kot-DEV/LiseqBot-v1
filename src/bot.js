const discord = require('discord.js');
const fs = require('fs');
const colors = require('colors');
const config = require('./config.js');
const bot = new discord.Client();
var serwy = bot.guilds.cache.size;
const moment = require('moment');
require('moment-duration-format')
const mongo = require('./mongo');
const messageCountSchema = require('./schemas/message-count-schema');

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
    let channel = bot.guilds.cache.get("775065153459847239").channels.cache.find(ch => ch.name === "powiadomienia");
    channel.bulkDelete(99);
    let embed = new discord.MessageEmbed()
    .setTitle('Stan bota')
    .setDescription('<:checkes:775412540439920640> Bot zostal uruchomiony! \n Wersja bota to: ' + config.version)
    .setFooter('LiseqBot Polska')
    channel.send(embed);//
});

bot.commands = new discord.Collection();
fs.readdir('./src/commands/4fun', (err, files) => { 

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Nie mozna znalezc komend z kategorii 4fun.".red);
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./commands/4fun/${f}`);
        console.log(`${f} zaladowane!`.yellow);
        bot.commands.set(props.help.name, props);
    });
    console.log('Kategoria 4Fun zostala zaladowana!'.green);
});

fs.readdir('./src/commands/moderacyjne', (err, files) => {

    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Nie mozna znalezc komend z kategorii Moderacyjne.".red);
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./commands/moderacyjne/${f}`);
        console.log(`${f} zaladowane!`.yellow);
        bot.commands.set(props.help.name, props);
    });
    console.log('Kategoria Moderacyjne zostala zaladowana!'.green);
});

fs.readdir('./src/commands/informacyjne', (err, files) => {
        if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Nie mozna znalezc komend z kategorii Informacyjne.".red);
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./commands/informacyjne/${f}`);
        console.log(`${f} zaladowane!`.yellow);
        bot.commands.set(props.help.name, props);
    });
    console.log('Kategoria Informacyjne zostala zaladowana!'.green);
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

bot.login(config.token);

 