const discord = require('discord.js');
const config = require('../../config')
module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(message.content.startsWith(prefix + 'mchead')) {
        if(args[0]) {
            let url = 'https://mc-heads.net/avatar/' + args[0]
            let embed = new discord.MessageEmbed()
            .setTitle('Glowa gracza o nicku ' + args[0]) 
            .setImage(url)
            .setColor('#98f542')
            .setFooter('LiseqBot Nic dodać nic ująć')
            message.channel.send(embed);
        } else {
            let embed = new discord.MessageEmbed()
            .setTitle('Nieprawidlowe uzycie komendy.')
            .setDescription('Prawidlowe uzycie l!mchead nick.')
            .setFooter('LiseqBot Nic dodać nic ująć')          
            message.channel.send(embed);
        }
    }
};

module.exports.help = {
    name: "mchead"
};
