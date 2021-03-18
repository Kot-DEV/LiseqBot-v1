const discord = require('discord.js');
const config = require('../../config')

module.exports.run = async(bot, message, args) => {
            if (!message.content.startsWith(config.prefix + "pomoc")) return;
            message.delete();
                const e = new discord.MessageEmbed()
                    .setTitle('Pomoc')
                    .setDescription('**Na początku wybierz kategorię.** \n \n  **Informacyjne:**  \n :information_source: \n\n  **Moderacyjne:** \n :hammer: \n\n **4Fun:** \n :8ball:')
                const msg = await message.channel.send(e);
                msg.react("🎱");
                msg.react("ℹ️");
                msg.react("🔨");
}

module.exports.help = {
    name: 'pomoc'
}