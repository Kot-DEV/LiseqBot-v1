const discord = require('discord.js');
const figlet = require('figlet');
const config = require('../../config');
module.exports.run = async(bot, message, args) => {
    if(!message.content.startsWith(config.prefix + "ascii")) return;
    message.delete();
    let embed = new discord.MessageEmbed()
    .setTitle('Ascii')
    .setDescription('Prawidlowe uzycie: `l!ascii <tekst>`')
    .setFooter('LiseqBot Nic dodać nic ująć')
    if(!args[0]) return message.channel.send(embed);
    const msg = args.join('');
    figlet.text(msg, function (err, data){
        if(err) {
            console.log("Something Went Wronng.");
            console.dir(err);
        }
        message.channel.send('``` \n' + data + '\n ```');    
    });
};

module.exports.help = {
    name: "ascii"
};
