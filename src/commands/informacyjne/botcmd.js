const Discord = require("discord.js");
const moment = require('moment');
require('moment-duration-format')
const config = require('./../../config')
module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix + 'bot')) {
        const duration = moment.duration(bot.uptime).format("D [Dni], H [Godzin], m [Minut], s [Sekund]");
        let embed = new Discord.MessageEmbed()
        .setTitle('Informacje o bocie')
        .setColor('#84f542')
        .setDescription('Data utworzenia bota: 08.11.2020, Czas GMT+1 20:00 \n Link do dodania bota: [Kliknij we mnie!](https://discord.com/oauth2/authorize?client_id=775065625672286208&permissions=8&scope=bot) \n Bot jest online: ' + duration + '\n Bot ma ' + config.commands + ' komend' + '\n Wersja Bota to' + config.version)
        message.channel.send(embed);
    }  
};
module.exports.help = {
    name: 'bot',
};
