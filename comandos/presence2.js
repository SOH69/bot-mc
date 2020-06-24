const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
  if(message.author.id !== '209399350600794113') return;
  
  let mensaje = message.content.split(";")
  let tipo = mensaje[1]
  let nombre = mensaje[2]
  
    client.user.setPresence({
    status: 'online',
    game: {
      name: nombre,
      type: tipo
    }
  })
}
module.exports.help = {
  name: "presence"
}