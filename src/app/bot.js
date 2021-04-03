// Wczytywanie modułów 
const discord = require('discord.js')
const fs = require('fs');
const colors = require('colors');
const config = require('./config.js');
const bot = new discord.Client();
var serwy = bot.guilds.cache.size;
const moment = require('moment');
require('moment-duration-format')
const Enmap = require('enmap');
const e = require('express');
// config
bot.ustawienia = new Enmap({
    name: "ustawienia",
    fetchAll: false,
    autoFetch: true,
    cloneLevel: 'deep',
    autoEnsure: {
      prefix: "l!",
      meme_channel: "false",
      meme_channel_id: "brak",
      logs_channel: "false",
      logs_channel_id: "brak"
    }
  });

bot.on('guildCreate', guild => {
  const channel = bot.guilds.cache.find(serwer => serwer.id === 775065153459847239).channels.cache.find(kanal => kanal.id === 827551141838716968);
  const embed = new discord.MessageEmbed()
  .setTitle('Nowy serwer!')
  .setDescription(`**Dodano mnie do nowego serwera!** \n \n **Nazwa serwera ${guild.name} \n **ID serwera:** ${guild.id} \n **Wlasciciel serwera:** ${guild.owner.user.username}${guild.owner.user.tag}`)
  channel.send(embed);
  guild.owner.send("Dzięki za dodanie mnie do serwera. Jestem pewien że twój serwer będzie jednym z najlepszych a może nawet najlepszy w polsce ;) \n **Pozdrawiam LiseqBot**")
});

//Po zbanowaniu/wyrzuceniu bota
bot.on('guildDelete', guild => {
    bot.ustawienia.delete(guild.id);
});
// Meme beta function
bot.on('message', async(message) => {
    if(message.author.bot) return;
    if(bot.ustawienia.get(message.guild.id).meme_channel != 'true' || message.channel.id != bot.ustawienia.get(message.guild.id).meme_channel_id) return;
    message.delete();
    if (message.attachments.size > 0) {
        if (message.attachments.every(attachIsPng)){
            const e = new discord.MessageEmbed()
            .setTitle(`Mem od użytkownika ${message.author.username}`)
            .setImage(`${message.attachments.first().proxyURL}`)
            .setFooter('Funkcja Mem jest w wersji beta!')
            const botmsg = await message.channel.send(e);
            botmsg.react('👍')
            botmsg.react('👎')
        } else {
            if(message.attachments.every(attachIsJpg)) {
                const e = new discord.MessageEmbed()
                .setTitle(`Mem od użytkownika ${message.author.username}`)
                .setImage(`${message.attachments.first().proxyURL}`)
                .setFooter('Funkcja Mem jest w wersji beta!')
                const botmsg = await message.channel.send(e);
                botmsg.react('👍')
                botmsg.react('👎')
            } else {
                if(message.attachments.every(attachIsGif)) {
                    const e = new discord.MessageEmbed()
                    .setTitle(`Mem od użytkownika ${message.author.username}`)
                    .setImage(`${message.attachments.first().proxyURL}`)
                    .setFooter('Funkcja Mem jest w wersji beta!')
                    const botmsg = await message.channel.send(e);
                    botmsg.react('👍')
                    botmsg.react('👎')
                }
            }
        }
    }
});

// Logi (Ban)!
bot.on('guildBanAdd', async(serwer, osoba) => {
    if(bot.ustawienia.get(serwer.id).logs_channel == "true" && bot.ustawienia.get(serwer.id).logs_channel_id != 'brak') {
        const fetchedLogs = await serwer.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_BAN_ADD',
        });
        const banLog = fetchedLogs.entries.first();
        const { executor, target, reason } = banLog;
        if(reason != null) {
        const embed = new discord.MessageEmbed()
        .setTitle(`Osoba zostala zbanowana!`) 
        .setDescription(`**Zbanowany przez:** _${executor.username}_ \n  **Osoba zbanowana:** _${target.username}_ \n **z powodu:** _${reason}_`) 
        .setImage(osoba.displayAvatarURL)
        const channel = serwer.channels.cache.find(channel => channel.id === bot.ustawienia.get(serwer.id).logs_channel_id); 
        channel.send(embed);
         } else {
            const e = new discord.MessageEmbed()
            .setTitle(`Osoba zostala zbanowana!`) 
            .setDescription(`**Zbanowany przez:** _${executor.username}_ \n  **Osoba zbanowana:** _${target.username}_ \n **z powodu:** _Brak powodu_`) 
            .setImage(osoba.displayAvatarURL)              
            const channel = serwer.channels.cache.find(channel => channel.id === bot.ustawienia.get(serwer.id).logs_channel_id);
            channel.send(e);
        } 
        
    }
});

// Logi (Kick)!
bot.on('guildMemberRemove', async(osoba) => {
    if(bot.ustawienia.get(osoba.guild.id).logs_channel == "true" && bot.ustawienia.get(osoba.guild.id).logs_channel_id != 'brak') {
        const fetchedLogs = await osoba.guild.fetchAuditLogs({
            limit: 1,
            type: 'MEMBER_KICK',
        });
        const kickLog = fetchedLogs.entries.first();
        if(!kickLog) return;
        const { executor, target, reason } = kickLog;
        if(reason != null) {
        const embed = new discord.MessageEmbed()
        .setTitle(`Osoba zostala wyrzucona!`) 
        .setDescription(`**Wyrzucona przez:** _${executor.username}_ \n  **Osoba wyrzucona:** _${target.username}_ \n **z powodu:** _${reason}_`) 
        .setImage(osoba.displayAvatarURL)
        const channel = serwer.channels.cache.find(channel => channel.id === bot.ustawienia.get(osoba.guild.id).logs_channel_id); 
        channel.send(embed);
         } else {
            const e = new discord.MessageEmbed()
            .setTitle(`Osoba zostala wyrzucona!`) 
            .setDescription(`**Wyrzucona przez:** _${executor.username}_ \n  **Osoba wyrzucona:** _${target.username}_ \n **z powodu:** _Brak powodu_`) 
            .setImage(osoba.displayAvatarURL)              
            const channel = serwer.channels.cache.find(channel => channel.id === bot.ustawienia.get(osoba.guild.id).logs_channel_id);
            channel.send(e);
        }  
    }
});
//Gdy bot on 
bot.on("ready", async () => {
    console.log(`${bot.user.username} zostal wlaczony!`);
    
    setInterval(() => {
        const duration = moment.duration(bot.uptime).format("D [Dni], H [Godzin], m [Minut], s [Sekund]");
        const activities_list = [
            `Ilosc serwerow bota: ${serwy}`,
            "Napisz l!pomoc aby dostac pomoc",
            `Moja wersja to ${config.version}`,
            `Jestem online: ${duration}`
        ]        
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        bot.user.setActivity(activities_list[index]);
    }, 5000);
});
// Wczytywanie komend.
bot.commands = new discord.Collection();
fs.readdir('./src/app/cmds', (err, files) => { 
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        consxole.log("Nie mozna znalezc zadnych komend".red);
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${f} zaladowane!`.yellow);
        bot.commands.set(props.help.name, props);
    });
    console.log('Wszystkie komendy zostaly zaladowane!'.green);
});

//Po wpisaniu komendy
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

//Customowe odpowiedzi
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

//Po wpisaniu prefixu
bot.on('message', message => {
    if(message.content == bot.ustawienia.get(message.guild.id).prefix) {
        const e = new discord.MessageEmbed()
        .setTitle('Wpisałeś prefix.')
        .setDescription(`Wpisz ${bot.ustawienia.get(message.guild.id).prefix}pomoc aby otrzymać pomoc`)
        message.channel.send(e);
    }
});

//"Logowanie" bota
bot.login(config.token); 

//Event pomocy. (Todo: Zmienić to na fetch reactions.)
bot.on('messageReactionAdd', async(reakcja, user) => {
   if(reakcja.message.channel.id == bot.ustawienia.get(reakcja.message.guild.id).meme_channel_id) return;
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
// Funkcje:
//Czy plik jest .png
function attachIsPng(msgAttach) {
    var url = msgAttach.url;
    //True if this url is a png image.
    return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;
}
// Czy plik jest .jpg
function attachIsJpg(msgAttach) {
    var url = msgAttach.url;
    //True if this url is a jpg image.
    return url.indexOf("jpg", url.length - "jpg".length /*or 3*/) !== -1;
}
// Czy plik jest .gif
function attachIsGif(msgAttach) {
    var url = msgAttach.url;
    //True if this url is a Gif image.
    return url.indexOf("gif", url.length - "gif".length /*or 3*/) !== -1;
}