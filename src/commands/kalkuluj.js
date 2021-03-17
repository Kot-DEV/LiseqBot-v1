const discord = require('discord.js');
const { prefix } = require('../config');
module.exports.run = (bot, message, args) => {
    if(!message.content.startsWith(`${prefix}kalkuluj`)) return;
    let num1 = args[0]
    let operator = args[1]
    let num2 = args[2]
    if(!num1 || !operator ||  !num2) {
        const e = new discord.MessageEmbed()
        .setTitle('Kalkulator')
        .setDescription('Nieprawidlowe uzycie \n Prawidlowe uzycie: `l!kalkuluj numer1 operator numer2. \n Np: l!kalkuluj 1 + 1`')
        message.channel.send(e);
    } else {
        let wynik;
        if(operator == '+') {
            wynik = parseInt(num1) + parseInt(num2);
        } else if(operator == '*' || operator == 'x') {
            wynik = parseInt(num1) * parseInt(num2);
        } else if(operator == ':' || operator == '/') {
            wynik =  parseInt(num1) / parseInt(num2);
        } else if(operator == '-') {
            wynik = parseInt(num1) - parseInt(num2);
        }
        const e = new discord.MessageEmbed()
        .setTitle('Kalkulator')
        .setDescription(`Wynik to: ${parseInt(wynik)}`)
        message.channel.send(e);
    }
}

module.exports.help = {
    name: 'kalkuluj'
}