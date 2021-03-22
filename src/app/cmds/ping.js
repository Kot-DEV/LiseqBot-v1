const discord = require('discord.js');
module.exports.run = async(bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(message.content == prefix + 'ping') {
        const embed = new discord.MessageEmbed()
        .setTitle('Ping!')
        .setDescription('Pong!  :fox:')
        .setColor('#62ff00')
        .setFooter('LiseqBot Nic dodać nic ująć')
         let toedit = await message.channel.send(embed);
        setTimeout(() => {
            let embed2 = new discord.MessageEmbed()
            .setTitle('Ping!')
            .setDescription(`Ping to ${Date.now() - message.createdTimestamp} ms`)
            .setColor('#62ff00')
            .setFooter('LiseqBot Nic dodać nic ująć')
            toedit.edit(embed2);
        }, 500)
    }
};

module.exports.help = {
    name: 'ping'
};
