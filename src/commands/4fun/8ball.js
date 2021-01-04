const discord = require('discord.js');
const e = require('express');
const { random } = require('mathjs');
const config = require('./../../config');
module.exports.run = (bot, message, args) => {
    if(!message.content.startsWith(config.prefix + '8ball')) return;
    if(args[0]) {
        const embed = new discord.MessageEmbed()
        .setTitle('8Ball')
        var i = getRandomInt(1, 8);
        if(i == 1) {
            embed.setDescription('Tak')
        } else if(i == 2) {
            embed.setDescription('Nie')
        } else if(i == 3) {
            embed.setDescription('Nie wiem')
        } else if(i == 4) {
            embed.setDescription('Nie wiem ale zaraz sie dowiem')
        } else if(i == 5) {
            embed.setDescription('Chyba tak')
        } else if(i == 6) {
            embed.setDescription('Napewno tak!')
        } else if(i == 7) {
        embed.setDescription('Chyba nie')
        } else if(i == 8) {
            embed.setDescription('Napewno nie!')
        }
        message.channel.send(embed);
    } else {
        const embed = new discord.MessageEmbed()
        .setTitle('Nieprawidlowe uzycie!')
        .setDescription('Prawidlowe uzycie: \n `l!8ball <pytanie*>` \n \n *Odpowiedzią na pytanie musi być tak albo nie.')
        message.channel.send(embed);
    }
};

module.exports.help = {
    name: "8ball"
};
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}