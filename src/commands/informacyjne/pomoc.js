const Discord = require("discord.js");
const config = require('./../../config')
module.exports.run = async (bot, message, args) => { 
    if(message.content.startsWith(config.prefix + 'pomoc')) {
        if(message.content != config.prefix + 'pomoc -here') {
        let embed = new Discord.MessageEmbed()
        .setTitle('Wysylanie wiadomosci... <:crosses:775407239790854214>')
        .setColor('#f54940')
        .setDescription('Trwa wysylanie wiadomosci <:crosses:775407239790854214>')
        let embed2 = new Discord.MessageEmbed()
        .setTitle('Wyslano wiadomosc! <:checkes:775412540439920640>') 
        .setColor('#009144')
        .setDescription('Wyslano wiadomosc Ci na pv! <:checkes:775412540439920640>')
        let wysylanieembeda = await message.channel.send(embed);
            setTimeout(() => {
            wysylanieembeda.edit(embed2);
        setTimeout(() => {
            let embed3 = new Discord.MessageEmbed() 
            .setTitle('Moje komendy')
            .setColor('#009144')
            .setDescription('\n \n **INFORMACYJNE** \n \n' + 
            
            'l!pomoc - Wyswietla tą wiadomosc.' +  
            '\n l!bot - Wyswietla informacje o bocie.' +
            '\n l!serverinfo - Informacje o serwerze na którym napisales wiadomosc' + 

            '\n \n **4FUN** \n \n' + 
            
            'l!miś - Randomowy Miś \n' + 
            'l!avatar - avatar osoby którą spingujesz!' + 
            '\n l!ascii - Zamienia tekst w ascii \n' + 
            '\n l!8ball - Odpowiada na twoje pytania!' + 
            'l!lis - Randomowe zdjecie Lisa! \n' + 
            '~~l!rzeleg - Wez sobie rzelga :3~~ Usuniete' + 
            '\n l!liczba - Losowa liczba!' + 
            '\n l!mchead nick - Glowa osoby w mc' + 
            '\n l!triggered - Angry!!' +
            '\n \n **MODERACYJNE** \n \n' + 
            
            'l!clear - Czyszczenie czatu' + 
            '\n l!ban - Banowanie uzytkownika \n' + 
            'l!kick - Wyrzucanie uzytkownika! \n' + 
            'l!say - Bot wysyla wiadomosc jakiej zapragniesz.' +
            'l!nuke - Bot robi buum na kanale :) i go restartuje.')
      
            message.author.send(embed3);
            }, 1250);
        }, 5000);
        } else {
            let embed4 = new Discord.MessageEmbed() 
            .setTitle('Moje komendy')
            .setColor('#009144')
            .setDescription('\n \n **INFORMACYJNE** \n \n' + 
            'l!pomoc - Wyswietla tą wiadomosc.' +  
            '\n l!bot - Wyswietla informacje o bocie.' +
            '\n l!serverinfo - Informacje o serwerze na którym napisales wiadomosc' + 
             
            '\n \n **4FUN** \n \n' + 

            'l!miś - Randomowy Miś \n' + 
            'l!avatar - avatar osoby którą spingujesz!' + 
            '\n l!ascii - Zamienia tekst w ascii \n' + 
            '\n l!8ball - Odpowiada na twoje pytania!' + 
            'l!lis - Randomowe zdjecie Lisa! \n' + 
            'l!obrazek - Randomowy obrazek \n' +
            '~~l!rzeleg - Wez sobie rzelga :3~~ Usuniete' + 
            '\n l!liczba - Losowa liczba!' + 
            '\n l!mchead nick - Glowa osoby w mc' + 
            '\n l!triggered - Angry!!!' +
            
            '\n \n **MODERACYJNE** \n \n' + 
            
            'l!clear - Czyszczenie czatu' + 
            '\n l!ban - Banowanie uzytkownika \n' + 
            'l!kick - Wyrzucanie uzytkownika! \n' + 
            'l!say - Bot wysyla wiadomosc jakiej zapragniesz.' +
            'l!nuke - Bot robi buum na kanale :) i go restartuje.')
             .setFooter('LiseqBot Nic dodać nic ująć')
             message.channel.send(embed4);
        }
    }
};

module.exports.help = {
    name: 'pomoc'
};
