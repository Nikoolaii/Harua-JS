const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {

    if (args.length === 0) return message.reply(':x: h!kiss <Personne mentionée>')
    if (message.mentions.users.first() === message.author){return message.channel.send(":x: PAUV MEC !")}
    if (message.mentions.users.first() === client.user){return message.channel.send(":x: Laisse moi tranquille nan mais oh !")} 

    superagent.get('https://nekos.life/api/v2/img/kiss')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setColor(`#6389EF`)
      .setAuthor(`${message.author.username} a embrassé ${message.mentions.members.first().user.username} *IT'S VERY CUUUTE*`)
      .setImage(response.body.url)
      .setTimestamp()
      .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL}`);
  message.channel.send(lewdembed);
    })
}

module.exports.help = {
    name: "kiss"
}