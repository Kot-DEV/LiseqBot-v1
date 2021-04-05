const discord = require('discord.js')

 module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(message.content.startsWith(prefix + "nuke")) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            const embed = new discord.MessageEmbed()
            .setTitle("Nie posiadasz uprawnien")
 .setDescription("Nie masz uprawnienia ADMINISTRATOR. ")
            .setColor('#fc0303')
            message.channel.send(embed)
        } else {
            message.channel.clone().then(channel => {
                message.channel.delete();
                channel.setPosition(message.channel.position);
                channel.send('**Kanał został zbombardowany przez** `' + message.author.username +  '`')
                channel.send(`https://tenor.com/view/explode-blast-blow-nuclear-boom-gif-15025770`)
            })
        }
    }
}
 module.exports.help = {
    name: "nuke"
 }
