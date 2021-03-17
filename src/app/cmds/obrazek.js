const discord = require('discord.js');
const config = require('../../config')
module.exports.run = (bot, message, args) => {
    if (message.content == config.prefix + 'obrazek') {
        var url;
        var liczba = getRandomInt(1, 10);
        if (liczba == 1) {
            url = 'https://picsum.photos/536/353'
        } else if (liczba == 2) {
            url = 'https://picsum.photos/536/354'
        } else if (liczba == 3) {
            url = 'https://picsum.photos/536/351'
        } else if (liczba == 4) {
            url = 'https://picsum.photos/536/352'
        } else if (liczba == 5) {
            url = 'https://picsum.photos/536/340'
        } else if (liczba == 6) {
            url = 'https://picsum.photos/536/341'
        } else if (liczba == 7) {
            url = 'https://picsum.photos/536/342'
        } else if (liczba == 8) {
            url = 'https://picsum.photos/536/343'
        } else if (liczba == 9) {
            url = 'https://picsum.photos/536/344'
        } else if (liczba == 10) {
            url = 'https://picsum.photos/536/345'
        } 
        let embed2 = new discord.MessageEmbed()
            .setTitle('Losowe zdjęcie!')
            .setColor('#009144')
            .setImage(url)
            .setFooter('LiseqBot Nic dodać nic ująć')
        message.channel.send(embed2)
    } else if (message.content == config.prefix + 'obrazek -dm') {
        var url;
        var liczba = getRandomInt(1, 10);
        if (liczba == 1) {
            url = 'https://picsum.photos/536/353'
        } else if (liczba == 2) {
            url = 'https://picsum.photos/536/354'
        } else if (liczba == 3) {
            url = 'https://picsum.photos/536/351'
        } else if (liczba == 4) {
            url = 'https://picsum.photos/536/352'
        } else if (liczba == 5) {
            url = 'https://picsum.photos/536/340'
        } else if (liczba == 6) {
            url = 'https://picsum.photos/536/341'
        } else if (liczba == 7) {
            url = 'https://picsum.photos/536/342'
        } else if (liczba == 8) {
            url = 'https://picsum.photos/536/343'
        } else if (liczba == 9) {
            url = 'https://picsum.photos/536/344'
        } else if (liczba == 10) {
            url = 'https://picsum.photos/536/345'
        } 
        let embed2 = new discord.MessageEmbed()
            .setTitle('Losowe zdjęcie!')
            .setColor('#009144')
            .setImage(url)
            .setFooter('LiseqBot Nic dodać nic ująć')
        message.author.send(embed2)
    }
};

module.exports.help = {
    name: 'obrazek'
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
