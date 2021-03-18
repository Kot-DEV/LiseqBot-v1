const discord = require('discord.js');
const config = require('../../config');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix + 'koszt')) {
        message.delete();
        const koszt = getRandomInt(0, 1000)
        const embed = new discord.MessageEmbed() 
        .setTitle('Koszt')
        .setDescription('Kosztujesz ' + koszt + '**$**')
        .setColor('#6cf542')
        .setFooter('LiseqBot Nic dodać nic ująć')
        message.channel.send(embed);
    }
};

module.exports.help = {
    name: "koszt"
};


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
