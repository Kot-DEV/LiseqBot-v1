const discord = require('discord.js');
const config = require('../../config');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix + "partnerstwa")) {
        message.channel.send("[:cat2:] Kot - Twój bot [:cat2:] \n  Co oferuje: \n\n [:cat2:] Wygodę [:cat2:] \n Bezpieczeństwo \n [:cat2:] Zabawę Wejdź na jego serwer developerski: \n https://discord.gg/vDXtqwASQd")
    }
}

module.exports.help = {
    name: 'partnerstwa'
}

