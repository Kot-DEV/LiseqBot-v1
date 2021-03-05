const discord = require('discord.js');
const config = require('../../config');
const messageCountSchema = require('../../schemas/message-count-schema');
module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix + "8ball")) {
        const i = getRandomInt(1, 2)
        if(i = 1) return message.channel.send("Odpowiedź na twoje pytanie to tak");
        if(i = 2) return message.channel.send("Odpowiedź na twoje pytanie to nie");
    }   
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
