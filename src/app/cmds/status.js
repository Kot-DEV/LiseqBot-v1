const discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(message.content == prefix + "status") {
        const emoji = bot.emojis.cache.get("775412540439920640")
        const embed = new discord.MessageEmbed()
        .setTitle("Status Bota.")
        .setDescription(`Wszystkie systemy = ${emoji} \n \n Serwer1 = ${emoji} \n Serwer2 = ${emoji} \n Serwer3 = ${emoji} `)
        .setColor('#009144')
        .setFooter("LiseqBot Nic dodać Nic ująć.")
        message.channel.send(embed)
    }
}

module.exports.help = {
    name: "status"
}