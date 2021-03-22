const discord = require('discord.js');
module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if (message.content == prefix + 'lis') {
        var url;
        var liczba = getRandomInt(1, 34);
        if (liczba == 1) {
            url = 'https://randomfox.ca/images/1.jpg'
        } else if (liczba == 2) {
            url = 'https://randomfox.ca/images/2.jpg'
        } else if (liczba == 3) {
            url = 'https://randomfox.ca/images/3.jpg'
        } else if (liczba == 4) {
            url = 'https://randomfox.ca/images/4.jpg'
        } else if (liczba == 5) {
            url = 'https://randomfox.ca/images/5.jpg'
        } else if (liczba == 6) {
            url = 'https://randomfox.ca/images/6.jpg'
        } else if (liczba == 7) {
            url = 'https://randomfox.ca/images/7.jpg'
        } else if (liczba == 8) {
            url = 'https://randomfox.ca/images/8.jpg'
        } else if (liczba == 9) {
            url = 'https://randomfox.ca/images/9.jpg'
        } else if (liczba == 10) {
            url = 'https://randomfox.ca/images/10.jpg'
        } else if (liczba == 11) {
            url = 'https://media.discordapp.net/attachments/776206306968469544/776401574548996116/OIP.png'
        } else if (liczba == 12) {
            url = 'https://randomfox.ca/images/12.jpg'
        } else if (liczba == 13) {
            url = 'https://randomfox.ca/images/13.jpg'
        } else if (liczba == 14) {
            url = 'https://randomfox.ca/images/14.jpg'
        } else if (liczba == 15) {
            url = 'https://randomfox.ca/images/15.jpg'
        } else if (liczba == 16) {
            url = 'https://randomfox.ca/images/16.jpg'
        } else if (liczba == 17) {
            url = 'https://randomfox.ca/images/17.jpg'
        } else if (liczba == 18) {
            url = 'https://randomfox.ca/images/18.jpg'
        } else if (liczba == 19) {
            url = 'https://randomfox.ca/images/19.jpg'
        } else if (liczba == 20) {
            url = 'https://randomfox.ca/images/20.jpg'
        } else if (liczba == 21) {
            url = 'https://randomfox.ca/images/21.jpg'
        } else if (liczba == 22) {
            url = 'https://randomfox.ca/images/22.jpg'
        } else if (liczba == 23) {
            url = 'https://randomfox.ca/images/23.jpg'
        } else if (liczba == 24) {
            url = 'https://randomfox.ca/images/24.jpg'
        } else if (liczba == 25) {
            url = 'https://randomfox.ca/images/25.jpg'
        } else if (liczba == 26) {
            url = 'https://randomfox.ca/images/26.jpg'
        } else if (liczba == 27) {
            url = 'https://randomfox.ca/images/27.jpg'
        } else if (liczba == 28) {
            url = 'https://randomfox.ca/images/28.jpg'
        } else if (liczba == 29) {
            url = 'https://randomfox.ca/images/29.jpg'
        } else if (liczba == 30) {
            url = 'https://randomfox.ca/images/30.jpg'
        } else if (liczba == 31) {
            url = 'https://randomfox.ca/images/31.jpg'
        } else if (liczba == 32) {
            url = 'https://randomfox.ca/images/32.jpg'
        } else if (liczba == 33) {
            url = 'https://randomfox.ca/images/33.jpg'
        } else if (liczba == 34) {
            url = 'https://randomfox.ca/images/34.jpg'
        }
        let embed2 = new discord.MessageEmbed()
            .setTitle('Randomowy Lis!')
            .setColor('#009144')
            .setImage(url)
            .setFooter('LiseqBot Nic dodać nic ująć')
        message.channel.send(embed2)
    } else if (message.content == prefix + 'lis -dm') {
        var url;
        var liczba = getRandomInt(1, 34);
        if (liczba == 1) {
            url = 'https://randomfox.ca/images/1.jpg'
        } else if (liczba == 2) {
            url = 'https://randomfox.ca/images/2.jpg'
        } else if (liczba == 3) {
            url = 'https://randomfox.ca/images/3.jpg'
        } else if (liczba == 4) {
            url = 'https://randomfox.ca/images/4.jpg'
        } else if (liczba == 5) {
            url = 'https://randomfox.ca/images/5.jpg'
        } else if (liczba == 6) {
            url = 'https://randomfox.ca/images/6.jpg'
        } else if (liczba == 7) {
            url = 'https://randomfox.ca/images/7.jpg'
        } else if (liczba == 8) {
            url = 'https://randomfox.ca/images/8.jpg'
        } else if (liczba == 9) {
            url = 'https://randomfox.ca/images/9.jpg'
        } else if (liczba == 10) {
            url = 'https://randomfox.ca/images/10.jpg'
        } else if (liczba == 11) {
            url = 'https://media.discordapp.net/attachments/776206306968469544/776401574548996116/OIP.png'
        } else if (liczba == 12) {
            url = 'https://randomfox.ca/images/12.jpg'
        } else if (liczba == 13) {
            url = 'https://randomfox.ca/images/13.jpg'
        } else if (liczba == 14) {
            url = 'https://randomfox.ca/images/14.jpg'
        } else if (liczba == 15) {
            url = 'https://randomfox.ca/images/15.jpg'
        } else if (liczba == 16) {
            url = 'https://randomfox.ca/images/16.jpg'
        } else if (liczba == 17) {
            url = 'https://randomfox.ca/images/17.jpg'
        } else if (liczba == 18) {
            url = 'https://randomfox.ca/images/18.jpg'
        } else if (liczba == 19) {
            url = 'https://randomfox.ca/images/19.jpg'
        } else if (liczba == 20) {
            url = 'https://randomfox.ca/images/20.jpg'
        } else if (liczba == 21) {
            url = 'https://randomfox.ca/images/21.jpg'
        } else if (liczba == 22) {
            url = 'https://randomfox.ca/images/22.jpg'
        } else if (liczba == 23) {
            url = 'https://randomfox.ca/images/23.jpg'
        } else if (liczba == 24) {
            url = 'https://randomfox.ca/images/24.jpg'
        } else if (liczba == 25) {
            url = 'https://randomfox.ca/images/25.jpg'
        } else if (liczba == 26) {
            url = 'https://randomfox.ca/images/26.jpg'
        } else if (liczba == 27) {
            url = 'https://randomfox.ca/images/27.jpg'
        } else if (liczba == 28) {
            url = 'https://randomfox.ca/images/28.jpg'
        } else if (liczba == 29) {
            url = 'https://randomfox.ca/images/29.jpg'
        } else if (liczba == 30) {
            url = 'https://randomfox.ca/images/30.jpg'
        } else if (liczba == 31) {
            url = 'https://randomfox.ca/images/31.jpg'
        } else if (liczba == 32) {
            url = 'https://randomfox.ca/images/32.jpg'
        } else if (liczba == 33) {
            url = 'https://randomfox.ca/images/33.jpg'
        } else if (liczba == 34) {
            url = 'https://randomfox.ca/images/34.jpg'
        }
        let embed2 = new discord.MessageEmbed()
            .setTitle('Randomowy Lis!')
            .setColor('#009144')
            .setImage(url)
            .setFooter('LiseqBot Nic dodać nic ująć')
        message.author.send(embed2)
    }
};

module.exports.help = {
    name: 'lis'
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
