const discord = require('discord.js');
const config = require('./../../config')
module.exports.run = (bot, message, args) => {
    if(message.content.startsWith(config.prefix + "say")) {
        if(args[0] && args[1]) {
            if(args[0] != "-here") {
                if(bot.channels.cache.get(args[0])) {
                    const embed2 = new discord.MessageEmbed()
                    embed2.setTitle('<:checkes:775412540439920640> Akcja wykonana poprawnie!')
                    embed2.setDescription('Komenda say zostala wykonana poprawnie na kanale <#' + args[0] + '>')
                    message.channel.send(embed2);
            const say = args.slice(1).join(' ');                
            bot.channels.cache.get(args[0]).send(say);
                } else {
                    const embed = new discord.MessageEmbed()
                    embed.setTitle('Nieprawidlowe uzycie!')
                         .setDescription('Podales zle id kanalu! (Podaj -here lub id kanalu na ktory chcesz to wyslac)')
                    message.channel.send(embed);
                }
            } else {
                const say = args.slice(1).join(' ');
                message.channel.send(say);
            }
        } else {
            let embed = new discord.MessageEmbed()
            embed.setTitle('Nieprawidlowe uzycie!')
            .setDescription('Prawidlowee uzycie: \n `l!say <channelid> <message..>`')
            message.channel.send(embed);
        }
    }
};

module.exports.help = { 
    name: "say"  
};