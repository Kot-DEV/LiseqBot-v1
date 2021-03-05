const discord = require('discord.js');

const config = require('../../config');

module.exports.run = (bot, message, args) => {
    if(!message.content.startsWith(config.prefix + "change-log")) return;
    const embed = new discord.MessageEmbed()
    .setTitle('Change Log')
    .setDescription('Nowa komendy:  \n \n - l!8ball \n - l!say \n - l!change-log \n - l!status \n \n Poprawione komendy: \n \n - l!ping \n \n od teraz bot może odpowiadać na polecenia. Np. "uwu", "owo", "bocie!!!" itd.')
    .setColor('#13fc03')
    .setFooter('LiseqBot Nic dodać Nic ująć.')
    message.channel.send(embed)
}

module.exports.help = {
    name: 'change-log'
}