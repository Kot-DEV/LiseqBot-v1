const discord = require('discord.js')
const config = require('../../config');
module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(!message.content.startsWith(prefix + 'slowmode')) return;
        message.channel.setRateLimitPerUser(args[0]);
        let embed2 = new discord.MessageEmbed()
        .setTitle('Slowmode!')
        .setDescription(`Slow mode zostal ustawiony na ${args[0]} sekund`)
        .setColor('#62ff00')
        .setFooter('LiseqBot Nic dodać nic ująć')
        message.channel.send(embed2);
};

module.exports.help = {
    name: 'slowmode'
}