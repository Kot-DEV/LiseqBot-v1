const discord = require('discord.js');
const config = require('../../config');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix + "aplikuj")) {
        const say = args.join(" ")
        client.users.get("449903383604625408").send(say);
        message.channel.send("Prośba o partnerstwo została wysłana. Proszę czekać na sprawdzenie reklamy.")
    }
}

module.exports.help = {
    name: 'aplikuj'
}