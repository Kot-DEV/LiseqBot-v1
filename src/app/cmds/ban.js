const discord = require('discord.js');
module.exports.run = (bot, msg, args) => {
  const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if (msg.content.startsWith(prefix + 'ban')) {
      const user = msg.mentions.users.first();  
      if(msg.member.hasPermission('BAN_MEMBERS')) {
        if(user) {
                const member = msg.guild.member(user);
                if(member.id == "775065625672286208") {
                  let embed1 = new discord.MessageEmbed()
                  .setThumbnail(msg.author.avatarURL)
                  .setTitle('Banowanie')
                  .setColor('#eb4934')     
 .setDescription(':( \n Dlaczego chcesz mnie zbanowac? \n Co Ci zrobilem! ')
                  msg.channel.send(embed1);
                  return;
                }
                member.ban()
              let embed2 = new discord.MessageEmbed()
              .setThumbnail(member.avatarURL)
              .setTitle('Banowanie')
              .setColor('#5eff00')
              .setDescription('Osoba o nicku `' + member.displayName + '` \n zostala zbanowana!') 
              msg.channel.send(embed2);
            } else {
              let embed = new discord.MessageEmbed()
              .setThumbnail(msg.author.avatarURL)
              .setTitle('Banowanie')
              .setColor('#eb4934')
 .setDescription('Nie masz kogo zbanowac!') 
              msg.channel.send(embed);
            }

            } else if(!msg.member.hasPermission('BAN_MEMBERS')) {
                let embed1 = new discord.MessageEmbed()
                .setThumbnail(msg.author.avatarURL)
                .setTitle('Banowanie')
                .setColor('#eb4934')
                .setDescription('Nie posiadasz uprawnienia `BAN_MEMBERS` aby uzyc tej komendy!')
                msg.channel.send(embed1);
              }
        }
};


module.exports.help = {
  name: 'ban'
};
