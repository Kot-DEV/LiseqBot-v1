const discord = require('discord.js');

module.exports.run = (bot, message, args) => {
  const prefix = bot.ustawienia.get(message.guild.id).prefix;
  if(message.content.startsWith(prefix + 'liczba')) { 
    var url;
        var liczba = getRandomInt(1, 100);
        let embed2 = new discord.MessageEmbed()
        .setTitle('Randomowa Liczba!')
        .setColor('#5eff00')
        .setDescription('Twoja losowa liczba to: `' + liczba + '`')
        message.channel.send(embed2)
      } 
};

module.exports.help = {
  name: 'liczba'
};
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}


