const Discord = require("discord.js");
const moment = require('moment');
require('moment-duration-format')
module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(message.content.startsWith(prefix + 'bot')) {
        const duration = moment.duration(bot.uptime).format("D [Dni], H [Godzin], m [Minut], s [Sekund]");
        let embed = new Discord.MessageEmbed()
        .setTitle('Informacje o bocie')
        .setColor('#84f542')
        .setDescription('Data utworzenia bota: 08.11.2020, Czas GMT+1 20:00 \n Link do dodania bota: [Kliknij we mnie!](https://discord.com/oauth2/authorize?client_id=775065625672286208&permissions=8&scope=bot) \n Bot jest online: ' + duration + '\n Bot ma ' + config.commands + ' komend' + '\n Wersja Bota to ' + config.version)

       .setFooter('LiseqBot Nic dodać nic ująć')
       message.channel.send(embed);
    }  
};
module.exports.help = {
    name: 'bot',
};
