const discord = require('discord.js');
module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(message.content.startsWith(prefix + "clear")) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            const embed = new discord.MessageEmbed()
            .setTitle('Brak uprawnien')
 .setDescription("Nie masz uprawnienia `MANAGE_MESSAGES`")
            .setColor('#fc1803')
            message.channel.send(embed)
            return;
        }
        if(args[0]) {
            message.channel.bulkDelete(args[0]);
            const embed = new discord.MessageEmbed()
            .setTitle('Clear')
            .setDescription('Usunieto `' + args[0] + "` wiadomości!")
            .setColor('#5eff00')
            message.channel.send(embed);
        } else {
            const embed = new discord.MessageEmbed()
            .setTitle('Nieprawidlowe uzycie')
 .setDescription('Podales nieprawidlową liczbę wiadomosci! \n Prawidlowe uzycie: `l!clear <messages>`')
            .setColor('#fc1803')
            message.channel.send(embed)
        }
    }
};

module.exports.help = {
    name: "clear"
};
