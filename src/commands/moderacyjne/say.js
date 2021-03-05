const discord = require('discord.js');
const config = require('../../config');

module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix + "say")) {
        if(message.member.hasPermission("ADMINISTRATOR")) {
            const say = args.join(" ")
            message.channel.send(say);
        } else {
            const embed = new discord.MessageEmbed()
            .setTitle('Nie masz uprawnien!')
            .setDescription('Aby uzywac tej komendy potrzebujesz uprawnienia ADMINISTRATOR!')
            .setColor('#eb4934')
            .setFooter('LiseqBot nic dodać nic ująć')
            message.channel.send(embed);
        }
    }
}

module.exports.help = {
    name: "say"
}