const discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
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
        } else if(args[0].toLowerCase() == 'meme_channel') {
            if(args[1] == "true" || args[1] == "false") {
            let [prop, ...value]  = args;
            prop = "meme_channel";
            value = args[1];
            bot.ustawienia.set(message.guild.id, value, prop);
            const e = new discord.MessageEmbed()
            .setTitle('Ustawianie meme_channel')
            .setDescription('Meme_channel zostalo ustawiona na ' + args[1] + '.')
            message.channel.send(e);
            } else  {
                const e = new discord.MessageEmbed()
                .setTitle('Ustawianie meme_channel')
                .setDescription('Wartosc może być ustawiona tylko na true lub false.')
                .setColor('#ff3700')
                message.channel.send(e);
            }
        }else if(args[0].toLowerCase() == 'meme_channel_id') { 
            if(parseInt(args[1]) != NaN) { 
                let [prop, ...value]  = args;
                prop = "meme_channel_id";
                value = args[1];
                bot.ustawienia.set(message.guild.id, value, prop);
                const e = new discord.MessageEmbed()
                .setTitle('Ustawianie meme_channel')
                .setDescription('Meme_channel zostalo ustawiona na ' + args[1] + '.')
                message.channel.send(e);
            } else {
                const e = new discord.MessageEmbed()
                .setTitle('Ustawianie meme_channel')
                .setDescription('Wartosc może być tylko liczbą.')
                .setColor('#ff3700')
                message.channel.send(e);
            }
        } else if(args[0].toLowerCase() == 'logs_channel') {
            if(args[1] == "true" || args[1] == "false") {
                let [prop, ...value]  = args;
                prop = "logs_channel";
                value = args[1];
                bot.ustawienia.set(message.guild.id, value, prop);
                const e = new discord.MessageEmbed()
                .setTitle('Ustawianie logs_channel')
                .setDescription('Logs_channel zostalo ustawiona na ' + args[1] + '.')
                message.channel.send(e);
                } else  {
                    const e = new discord.MessageEmbed()
                    .setTitle('Ustawianie logs_channel')
                    .setDescription('Wartosc może być ustawiona tylko na true lub false.')
                    .setColor('#ff3700')
                    message.channel.send(e);
                }
        } else if(args[0].toLowerCase() == 'logs_channel_id') {  
                let [prop, ...value]  = args;
                prop = "logs_channel_id";
                value = args[1];
                bot.ustawienia.set(message.guild.id, value, prop);
                const e = new discord.MessageEmbed()
                .setTitle('Ustawianie logs_channel')
                .setDescription('logs_channel zostalo ustawiona na ' + args[1] + '.')
                .setColor('#5eff00')
                message.channel.send(e); 
        } else if(args[0].toLowerCase() == 'verify') {
            let [prop, ...value] = args;
            prop = "verify";
            value = args[1]
            bot.ustawienia.set(message.guild.id, value, prop);
            const e = new discord.MessageEmbed()
            .setTitle('Ustawianie verify')
            .setDescription('verify zostalo ustawiona na ' + args[1] + '.')
            .setColor('#5eff00')
            message.channel.send(e); 
        } else if(args[0].toLowerCase() == 'verify_channel_id') {
            let [prop, ...value] = args;
            prop = "verify_channel_id";
            value = args[1]
            bot.ustawienia.set(message.guild.id, value, prop);
            const e = new discord.MessageEmbed()
            .setTitle('Ustawianie verify_channel_id')
            .setDescription('verify_channel_id zostala ustawiona na ' + args[1] + '.')
            .setColor('#5eff00')
            message.channel.send(e);
            const channel = bot.guilds.cache.find(f => f.id === message.guild.id).channels.cache.find(ch => ch.id === bot.ustawienia.get(message.guild.id).verify_channel_id) 
            const embed = new discord.MessageEmbed()
            .setTitle('Weryfikacja!')
            .setDescription('Wpisz kod `B9A4` aby zdobyć dostęp do wszystkich kanałów!')
            .setColor('#5eff00')
            let wiadomosc = await channel.send(embed);
            wiadomosc.react('<:checkes:775412540439920640>');
        } else if(args[0].toLowerCase() == 'verify_role_id') {
            let [prop, ...value] = args;
            prop = "verify_role_id";
            value = args[1]
            bot.ustawienia.set(message.guild.id, value, prop);
            const e = new discord.MessageEmbed()
            .setTitle('Ustawianie verify_role_id')
            .setDescription('verify_role_id zostala ustawiona na ' + args[1] + '.')
            .setColor('#5eff00')
            message.channel.send(e); 
        }
        else {
            const e = new discord.MessageEmbed()
            .setTitle('Config')
            .setDescription('Taka opcja nie istnieje! \n \n Możliwe opcje: `prefix`, `welcome_channel_id`, `welcome_message`, `meme_channel`, `meme_channel_id`, `logs_channel`, `logs_channel_id`, `verify_channel_id`, `verify_role_id`')
            message.channel.send(e);
        }
    } else {
        const e = new discord.MessageEmbed()
        .setTitle('Config')
        .setDescription('Prawidlowe uzycie: ' + prefix + ' config <opcja> <wartość> \n Możliwe opcje: `prefix`, `meme_channel`, `meme_channel_id`, `logs_channel`, `logs_channel_id`, `verify_channel_id`, `verify_role_id`')
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