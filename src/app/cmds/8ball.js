const discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(message.content.startsWith(prefix + "8ball")) {
        let i = getRandomInt(1, 2)
        if(i == 1) {
            message.channel.send("Odpowiedź na twoje pytanie to tak");
        } else if(i == 2) {
            message.channel.send("Odpowiedź na twoje pytanie to nie");
        }
    }   
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }


  module.exports.help = {
      name: "8ball"
  }