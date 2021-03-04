const discord = require('discord.js');
const config = require('./../../config')
module.exports.run = (bot, message, args) => {
    if(message.content == config.prefix + 'ping') {
        const embed = new discord.MessageEmbed()
        .setTitle('Ping!')
        .setDescription('Pong!  :fox:')
        .setColor('#62ff00')
        .setFooter('LiseqBot Nic dodać nic ująć')
        message.channel.send(embed);
    }
};


module.exports.help = {
    name: 'ping'
};
