const discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(message.content == prefix + 'server-info') {
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
    }
};


module.exports.help = {
    name: 'server-info'
};
