const discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(!message.content.startsWith(`${prefix}ankieta`)) return;
    if(message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new discord.MessageEmbed()
        .setTitle('Ankieta')
        .setColor('#eb4934')
        .setDescription(`${args.join(" ")}`) 
        const ankieta = await message.channel.send(embed);
        ankieta.react('<:checkes:775412540439920640>').then(ankieta.react('<:crosses:775407239790854214>'))
    } else {
        let embed = new discord.MessageEmbed()
        .setTitle('Ankiety')
        .setColor('#eb4934')
        .setDescription('Nie masz uprawnień do użycia tej komendy! \n Potrzebujesz uprawnienia `ADMINISTRATOR`') 
        message.channel.send(embed);
    }

};

module.exports.help = {
    name: "ankieta"
};