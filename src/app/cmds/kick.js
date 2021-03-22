const discord = require('discord.js');

module.exports.run = (bot, msg, args) => {
  const prefix = bot.ustawienia.get(message.guild.id).prefix;
    if (msg.content.startsWith(prefix + 'kick')) {
      const user = msg.mentions.users.first();
      if(msg.member.hasPermission('KICK_MEMBERS')) {  
        if(user) {
            const member = msg.guild.member(user);
            if(member.id == "775065625672286208") {
              let embed1 = new discord.MessageEmbed()
              .setThumbnail(msg.author.avatarURL)
              .setTitle('Banowanie')
        .setFooter('LiseqBot Nic dodać nic ująć')
              .setColor('#eb4934')
              .setDescription(':( \n Dlaczego chcesz mnie wyrzucic? \n Co Ci zrobilem! ')
              msg.channel.send(embed1);
              return;
            }
            member.kick();
              let embed2 = new discord.MessageEmbed()
              .setThumbnail(member.avatarURL)
              .setTitle('Wyrzucanie <:crosses:775407239790854214>')
                      .setFooter('LiseqBot Nic dodać nic ująć')
.setColor('#f54940')
              .setDescription('Osoba o nicku `' + member.displayName + '` \n zostala wyrzucona z tego serwera!' + ' <:crosses:775407239790854214> ') 
              msg.channel.send(embed2);   
            } else {
              let embed = new discord.MessageEmbed()
              .setThumbnail(msg.author.avatarURL)
              .setTitle('Wyrzucanie')
                      .setFooter('LiseqBot Nic dodać nic ująć')
.setColor('#eb4934')
              .setDescription('Nie masz kogo wyrzucic!')
              msg.channel.send(embed);
            }
            
            } else {
                let embed1 = new discord.MessageEmbed()
                .setThumbnail(msg.author.avatarURL)
                .setTitle('Wyrzucanie')
        .setFooter('LiseqBot Nic dodać nic ująć')
                .setColor('#eb4934')
                .setDescription('Nie posiadasz uprawnienia `KICK_MEMBERS` aby uzyc tej komendy!')
                msg.channel.send(embed1);
              }
        }
};


module.exports.help = {
  name: 'kick'
};
