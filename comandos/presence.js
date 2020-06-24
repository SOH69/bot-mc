const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
  if(message.author.id !== '209399350600794113') return;
  
  let mensaje = message.content.split(";")
  let nombre = mensaje[1]
  let url = mensaje[2]
  
    client.user.setPresence({
    status: 'online',
    game: {
      url: url,
      name: nombre,
      type: 'STREAMING'
    }
  })
}
module.exports.help = {
  name: "stream"
}