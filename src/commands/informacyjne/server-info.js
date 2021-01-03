const discord = require('discord.js');
const config = require('./../../config')

module.exports.run = (bot, message, args) => {
    if(message.content == config.prefix + 'server-info') {
        if(message.guild.createdAt.getUTCDay() != 0) {
        let embed = new discord.MessageEmbed()
        .setTitle('Server Info')
        .setDescription(
        'Nazwa serwera: **' + message.guild.name + '**' + '\n' +
         'Ilosc osob: **' + message.guild.memberCount + '**' + '\n' +
         'Data Stworzenia: **' + message.guild.createdAt.getUTCDay() + '.' + message.guild.createdAt.getUTCMonth() + '.' + message.guild.createdAt.getFullYear()  + '**' + '\n' +
         'Ilosc ról: **' + message.guild.roles.cache.size + '** \n' + 
         'Ilosc Emotek: **' + message.guild.emojis.cache.size + '**')
        .setColor('#009144')
        message.channel.send(embed);
        } else {
            let embed = new discord.MessageEmbed()
            .setTitle('Server Info')
            .setDescription(
            'Nazwa serwera: **' + message.guild.name + '**' + '\n' +
             'Ilosc osob: **' + message.guild.memberCount + '**' + '\n' +
             'Data Stworzenia: **' + '01' + '.' + message.guild.createdAt.getUTCMonth() + '.' + message.guild.createdAt.getFullYear()  + '**' + '\n' +
             'Ilosc ról: **' + message.guild.roles.cache.size + '** \n' + 
             'Ilosc Emotek: **' + message.guild.emojis.cache.size + '**')
            .setColor('#009144')
            message.channel.send(embed);

        }
    }
};


module.exports.help = {
    name: 'server-info'
};