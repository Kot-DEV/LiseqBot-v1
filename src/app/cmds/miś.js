const discord = require('discord.js');
const config = require('../../config')
module.exports.run = (bot, message, args) => {
    if (message.content == config.prefix + 'miś') {
        message.delete();
        var url;
        var liczba = getRandomInt(1, 10);
        if (liczba == 1) {
            url = 'https://placebear.com/230/300'
        } else if (liczba == 2) {
            url = 'https://placebear.com/230/301'
        } else if (liczba == 3) {
            url = 'https://placebear.com/230/302'
        } else if (liczba == 4) {
            url = 'https://placebear.com/230/303'
        } else if (liczba == 5) {
            url = 'https://placebear.com/230/304'
        } else if (liczba == 6) {
            url = 'https://placebear.com/230/305'
        } else if (liczba == 7) {
            url = 'https://placebear.com/230/306'
        } else if (liczba == 8) {
            url = 'https://placebear.com/230/307'
        } else if (liczba == 9) {
            url = 'https://placebear.com/230/308'
        } else if (liczba == 10) {
            url = 'https://placebear.com/230/309'
        } 
        let embed2 = new discord.MessageEmbed()
            .setTitle('Randomowy Miś!!')
            .setColor('#009144')
            .setImage(url)
        .setFooter('LiseqBot Nic dodać nic ująć')
        message.channel.send(embed2)
    } else if (message.content == config.prefix + 'mis -dm') {
        var url;
        var liczba = getRandomInt(1, 10);
        if (liczba == 1) {
            url = 'https://placebear.com/230/300'
        } else if (liczba == 2) {
            url = 'https://placebear.com/230/301'
        } else if (liczba == 3) {
            url = 'https://placebear.com/230/302'
        } else if (liczba == 4) {
            url = 'https://placebear.com/230/303'
        } else if (liczba == 5) {
            url = 'https://placebear.com/230/304'
        } else if (liczba == 6) {
            url = 'https://placebear.com/230/305'
        } else if (liczba == 7) {
            url = 'https://placebear.com/230/306'
        } else if (liczba == 8) {
            url = 'https://placebear.com/230/307'
        } else if (liczba == 9) {
            url = 'https://placebear.com/230/308'
        } else if (liczba == 10) {
            url = 'https://placebear.com/230/309'
        } 
        let embed2 = new discord.MessageEmbed()
            .setTitle('Randomowy Miś!')
            .setColor('#009144')
            .setImage(url)
        .setFooter('LiseqBot Nic dodać nic ująć')
        message.author.send(embed2)
    }
};

module.exports.help = {
    name: 'miś'
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
