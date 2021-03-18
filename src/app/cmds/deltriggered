const discord = require('discord.js');
const config = require('../../config')
const canvacord = require('canvacord');

module.exports.run = async(bot, message, args) => {
    if(message.content.startsWith(config.prefix + 'triggered')) {
        if(!message.mentions.users.first())  {
        const avatar = message.member.user.displayAvatarURL({dynamic: false, format: "png"})
        const image = await canvacord.Canvas.trigger(avatar);
        let attachment = new discord.MessageAttachment(image, "triggered.gif");
        message.channel.send(attachment);
        } else {
            let member = message.mentions.users.first();
            const avatar = member.displayAvatarURL({dynamic: false, format: "png"})
            const image = await canvacord.Canvas.trigger(avatar);
            let attachment = new discord.MessageAttachment(image, "triggered.gif");
            message.channel.send(attachment);
        }
    }
};

module.exports.help = {
    name: 'triggered'
};