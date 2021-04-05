const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix
        if(args[0] && args[1] && args[2] && args[3]) {
        if(!message.content.startsWith(`${prefix}embed`)) return;
        const embed = new discord.MessageEmbed()
        .setTitle(args[0])
        .setColor(args[1])
        .setFooter(args[2])
        const description = args.slice(3).join(" ").replace(/{n}/g, "\n")
        embed.setDescription(description)
        message.channel.send(embed);
    } else {
        const embed = new discord.MessageEmbed()
        .setTitle('Nieprawidlowy format')
        .setDescription("Prawidłowy format: `l!embed [title] [color] [footer] [description]..`")
        message.channel.send(embed);
    }
};


module.exports.help = {
    name: "embed"
}