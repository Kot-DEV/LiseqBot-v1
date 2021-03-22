
const discord = require('discord.js')
const fs = require('fs');
const colors = require('colors');
const config = require('../config.js');
const bot = new discord.Client();
var serwy = bot.guilds.cache.size;
const moment = require('moment');
require('moment-duration-format')
const Enmap = require('enmap')

bot.ustawienia = new Enmap({
    name: "ustawienia",
    fetchAll: false,
    autoFetch: true,
    cloneLevel: 'deep',
    autoEnsure: {
      prefix: "l!"
    }
  });

bot.on('guildDelete', guild => {
    client.ustawienia.delete(guild.id);
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
});

bot.commands = new discord.Collection();
fs.readdir('./src/app/cmds', (err, files) => { 
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Nie mozna znalezc zadnych komend".red);
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${f} zaladowane!`.yellow);
        bot.commands.set(props.help.name, props);
    });
    console.log('Wszystkie komendy zostaly zaladowane!'.green);
});


bot.on("message", async(message) => {
    const guildConf = bot.ustawienia.get(message.guild.id);
    if(message.content.indexOf(guildConf.prefix) !== 0) return;; 
        if(message.content == guildConf.prefix) return;
        let prefix = guildConf.prefix;
        const args = message.content.split(/\s+/g);
        const command = args.shift().slice(guildConf.prefix.length).toLowerCase();
        const cmd = bot.commands.get(command)
            if(cmd) {
            if(message.channel.type === 'dm') return;
            console.log("Osoba o nicku ".yellow + message.author.username.white + " uzyla komendy ".yellow + message.content.white + " \n Na serwerze ".yellow + message.guild.name.white);
            cmd.run(bot, message, args);
            message.react('775412540439920640');
        } else {
            message.react('775407239790854214')
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


bot.on('message', message => {
    if(message.content == bot.ustawienia.get(message.guild.id).prefix) {
        const e = new discord.MessageEmbed()
        .setTitle('Wpisałeś prefix.')
        .setDescription(`Wpisz ${bot.ustawienia.get(message.guild.id).prefix}pomoc aby otrzymać pomoc`)
        message.channel.send(e);
    }
});


bot.login(config.token); 

bot.on('messageReactionAdd', async(reakcja, user) => {
    const prefix = bot.ustawienia.get(reakcja.message.guild.id).prefix;
   if(reakcja.message.partial) await reakcja.message.fetch();
   if(reakcja.partial) await reakcja.fetch();
   if(user.bot) return;
   if(!reakcja.message.guild) return;
   if(!reakcja.message.author.bot) return;
   if(reakcja)
   if(reakcja.emoji.name === '🎱') { // 4fun
        reakcja.message.embeds.some((item) => {
            if(item.title.includes("Pomoc")) {
                const e = new discord.MessageEmbed()
                .setTitle('4fun')
                .setDescription(`${prefix}8ball \n ${prefix}ascii \n ${prefix}avatar \n ${prefix}cytat \n ${prefix}koszt \n ${prefix}liczba \n ${prefix}mchead \n ${prefix}lis \n ${prefix}miś \n ${prefix}obrazek \n ${prefix}triggered \n ${prefix}kalkuluj`)
                 reakcja.message.channel.send(e); 
        }});
    } else if(reakcja.emoji.name === '🔨') { // moderacyjne
        reakcja.message.embeds.some((item) => {
            if(item.title.includes("Pomoc")) {
                const e = new discord.MessageEmbed()
                .setTitle('Moderacyjne')
                .setDescription(`${prefix}ban \n ${prefix}clear \n ${prefix}kick \n ${prefix}nuke \n ${prefix}say \n ${prefix}slowmode \n ${prefix}config`)
                reakcja.message.channel.send(e);
            }});
        } else if(reakcja.emoji.name === 'ℹ️') { // informacyjne
            reakcja.message.embeds.some((item) => {
                const e = new discord.MessageEmbed()
                .setTitle('Informacyjne')
                .setDescription(`${prefix}bot \n ${prefix}pomoc \n ${prefix}server-info \n ${prefix}status`)
                reakcja.message.channel.send(e);
            });
        }
        reakcja.message.reactions.removeAll();
        reakcja.message.delete();
});


 