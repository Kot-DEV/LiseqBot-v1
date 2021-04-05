const discord = require('discord.js');

module.exports.run = (bot, message, args) => {
  const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if(message.content == prefix + 'cytat') {
      var cytat = getRandomInt(1, 10) 
        let embed2 = new discord.MessageEmbed()
        .setTitle('Losowy Cytat.')
        .setColor('#5eff00')
        if(cytat == 1) {
          embed2.setDescription('To, że milczę, nie znaczy, że nie mam nic do powiedzenia.')
        } else if(cytat == 2) {
          embed2.setDescription('Lepiej zaliczać się do niektórych, niż do wszystkich.')
        } else if(cytat == 3) {
          embed2.setDescription('Czytanie książek to najpiękniejsza zabawa, jaką sobie ludzkość wymyśliła')
        } else if(cytat == 4) {
          embed2.setDescription('Książki są lustrem: widzisz w nich tylko to co, już masz w sobie')
        } else if(cytat == 5) {
          embed2.setDescription('Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu')
        } else if(cytat == 6) {
          embed2.setDescription('W chwili, kiedy zastanawiasz się czy kogoś kochasz, przestałeś go już kochać na zawsze.')
        } else if(cytat == 7) {
          embed2.setDescription('Żaden dzień się nie powtórzy, \n  nie ma dwóch podobnych nocy, \n dwóch tych samych pocałunków, \n  dwóch jednakich spojrzeń w oczy.')
        } else if(cytat == 8) {
          embed2.setDescription('Kocha się za nic. Nie istnieje żaden powód do miłości.')
         } else if(cytat == 9) {
          embed2.setDescription('Życie jest jak pudełko czekoladek - nigdy nie wiesz, co ci się trafi.')
         } else if(cytat == 10) {
          embed2.setDescription('Pokój bez książek to jak ciało bez duszy.')
        } else if(cytat == 11) {
          embed2.setDescription('Pozbierać jest się dziesięć razy trudniej, niż rozsypać.');
        }
        message.channel.send(embed2);
      }
};


module.exports.help = {
    name: 'cytat'
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }


