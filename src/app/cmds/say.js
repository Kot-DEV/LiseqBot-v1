const discord = require('discord.js');
module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(message.content.startsWith(prefix + "say")) {
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