const Discord = require("discord.js");
const fs = require("fs");
const config = require('../../config')
module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(message.content.startsWith(prefix + 'avatar')) {
        if(!message.mentions.users.size) {
        let embed = new Discord.MessageEmbed()
        .setTitle('Oto twoj avatar **' + message.author.username + '**!')
        .setColor('#009144')
        .setImage(message.author.displayAvatarURL())
        .setFooter('LiseqBot Nic dodać nic ująć')
        message.channel.send(embed);

    } else {
        var u = message.mentions.users.first(); 
        let embed = new Discord.MessageEmbed()
        .setTitle('Oto avatar osoby o nicku **' + u.username + '**!')
        .setColor('#009144')
        .setImage(u.displayAvatarURL())
        .setFooter('LiseqBot Nic dodać nic ująć')
        message.channel.send(embed);
    }
} 
};

module.exports.help = {
    name: 'avatar'
};
