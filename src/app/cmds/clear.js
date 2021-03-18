const discord = require('discord.js');
const config = require('../../config')
module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix + "clear")) {
        message.delete();
        if(!message.member.hasPermission("MANAGE_MESSAGES")) {
            const embed = new discord.MessageEmbed()
            .setTitle('Brak uprawnien')
               .setFooter('LiseqBot Nic dodać nic ująć')    
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
                 .setFooter('LiseqBot Nic dodać nic ująć')  
 .setColor('#bafc03')
            message.channel.send(embed);
        } else {
            const embed = new discord.MessageEmbed()
            .setTitle('Nieprawidlowe uzycie')
                 .setFooter('LiseqBot Nic dodać nic ująć')  
 .setDescription('Podales nieprawidlową liczbę wiadomosci! \n Prawidlowe uzycie: `l!clear <messages>`')
            .setColor('#fc1803')
            message.channel.send(embed)
        }
    }
};

module.exports.help = {
    name: "clear"
};
