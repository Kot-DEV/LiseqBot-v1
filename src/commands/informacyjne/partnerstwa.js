const discord = require('discord.js');
const config = require('../../config');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix + "partnerstwa")) {
        message.channel.send("Partnerstwo z Kotem oraz jego serwerem developerskim: https://discord.gg/vDXtqwASQd")
    }
}

module.exports.help = {
    name: 'partnerstwa'
}

