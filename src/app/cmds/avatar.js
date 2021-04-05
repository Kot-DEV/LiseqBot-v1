const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(message.content.startsWith(prefix + 'avatar')) {
        if(!message.mentions.users.size) {
        let embed = new Discord.MessageEmbed()
        .setTitle('Oto twoj avatar **' + message.author.username + '**!')
        .setColor('#5eff00')
        .setImage(message.author.displayAvatarURL())
        message.channel.send(embed);

    } else {
        var u = message.mentions.users.first(); 
        let embed = new Discord.MessageEmbed()
        .setTitle('Oto avatar osoby o nicku **' + u.username + '**!')
        .setColor('#5eff00')
        .setImage(u.displayAvatarURL())
        message.channel.send(embed);
    }
} 
};

module.exports.help = {
    name: 'avatar'
};
