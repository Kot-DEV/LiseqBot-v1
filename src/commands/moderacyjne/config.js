const discord = require('discord.js');
const config = require('./../../config');
module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix + 'config')) {
        const member = message.member;
        if(!member.hasPermission("ADMINISTRATOR")) {
            const embed = discord.MessageEmbed()
            .setTitle("Brak Uprawnien")
            .setDescription("Nie masz uprawnienia `ADMINISTRATOR`.")
            .setColor('#49fc03')
           return message.channel.send(embed);
        }  else {
            const embed = discord.MessageEmbed()
            .setTitle("Niedlugo")
            .setDescription("Trwają prace nad tą komendą")
            .setColor('#49fc03')
            message.channel.send(embed);
        }
    }
};

module.exports.help = {
    name: 'config'
};