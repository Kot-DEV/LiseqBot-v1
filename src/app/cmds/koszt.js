const discord = require('discord.js');
module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(message.content.startsWith(prefix + 'koszt')) {
        const koszt = getRandomInt(0, 1000)
        const embed = new discord.MessageEmbed() 
        .setTitle('Koszt')
        .setDescription('Kosztujesz ' + koszt + '**$**')
        .setColor('#5eff00')
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
