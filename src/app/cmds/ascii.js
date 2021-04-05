const discord = require('discord.js');
const figlet = require('figlet');
module.exports.run = async(bot, message, args) => {
    const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(!message.content.startsWith(prefix + "ascii")) return;
    let embed = new discord.MessageEmbed()
    .setTitle('Ascii')
    .setDescription('Prawidlowe uzycie: `l!ascii <tekst>`')
    .setColor('#5eff00')
    if(!args[0]) return message.channel.send(embed);
    const ms = args.join(" ");
    const msg = ms.replace(" ", "\n")

    figlet.text(msg, function (err, data1 ){
        if(err) {
            console.log("Something Went Wronng.");
            console.dir(err);
        }
            
                const e = new discord.MessageEmbed()
                e.setDescription('```' + data1 + '```')
                e.setColor('#5eff00')
                e.setTitle('Ascii!')
                message.channel.send(e)    
         });
};

module.exports.help = {
    name: "ascii"
};
