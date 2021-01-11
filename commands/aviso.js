const Discord = require("discord.js");
 
exports.run = (bot, message, args) => {
     if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.reply(
      "você é fraco, lhe falta permissão de `Gerenciar Mensagens` para usar esse comando"
    );
  
    let membro = message.mentions.users.first()
    if (!membro) return message.reply(`mencione um membro`)
 
    let motivo = args.slice(1).join(" ");
    if (!motivo) return message.reply(`escreva um motivo`)
 
    let embed = new Discord.MessageEmbed()
 
    .setTitle(`AVISO: ${membro.username}\nMotivo:`)
    .setDescription(motivo)
    .setColor('RED')
    .setFooter(`Staff responsavel: ${message.author.username}`, message.author.avatarURL)
    .setImage(message.guild.iconURL())
 
    membro.send(embed)
  
    message.channel.send(embed)
 
}
 
exports.help = {
    name: 'warn'
}