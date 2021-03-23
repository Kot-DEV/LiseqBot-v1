const discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(!message.content.startsWith(`${prefix}config`)) return;
    if(message.member.hasPermission('ADMINISTRATOR')) {
    if(args[0] && args[1]) {
        
        if(args[0].toLowerCase() == 'prefix') {
            let [prop, ...value] = args;
            prop = "prefix";
            value = args[1];
            bot.ustawienia.set(message.guild.id, value, prop);
            const e = new discord.MessageEmbed()
            .setTitle('Ustawianie Prefixu.')
            .setDescription(`Prefix zostal ustawiony na ${args[1]}`)
            .setColor('#ff3700')
            message.channel.send(e);
        } else {
            const e = new discord.MessageEmbed()
            .setTitle('Config')
            .setDescription('Taka opcja nie istnieje! \n \n Możliwe opcje: `prefix`, `welcome_channel_id`, `welcome_message`')
            message.channel.send(e);
        }
    } else {
        const e = new discord.MessageEmbed()
        .setTitle('Config')
        .setDescription(`Prawidlowe uzycie: ${prefix}config <opcja> <wartość>`)
        message.channel.send(e);
        }
    } else {
        const e = new discord.MessageEmbed()
        .setTitle('Config')
        .setDescription(`Aby skorzystać z tej komendy potrzebujesz uprawnienia ADMINISTRATOR`)
        message.channel.send(e);
    }
};


module.exports.help = {
    name: 'config'
};