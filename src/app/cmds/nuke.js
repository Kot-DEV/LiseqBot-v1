const discord = require('discord.js')
const config = require('../../config')

 module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix + "nuke")) {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            const embed = new discord.MessageEmbed()
            .setTitle("Nie posiadasz uprawnien")
                   .setFooter('LiseqBot Nic dodać nic ująć')
 .setDescription("Nie masz uprawnienia ADMINISTRATOR. ")
            .setColor('#fc0303')
            message.channel.send(embed)
        } else {
            message.channel.clone().then(channel => {
                channel.setPosition(message.channel.position)
                channel.send('https://tenor.com/view/explosion-boom-iron-man-gif-14282225')
            })
            message.channel.delete()
    

        }
    }
 }

 module.exports.help = {
    name: "nuke"
 }
