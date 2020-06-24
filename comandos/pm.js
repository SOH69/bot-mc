const Discord = require("discord.js");
const Gamedig = require('gamedig');
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
      if (message.author.id !== '209399350600794113') return message.channel.send("`Este comando no esta permitido a nadie excepto a ZxFrankxZ`");  
  if(message.channel.type === "dm") return message.reply("No puedes usar este comando en mensaje privado, debes usarlo en cualquier chat del grupo de discord");
  let id = message.content.split(" ").slice(1, 2)
  if(!id) return;
  let mensaje = message.content.split(" ").slice(2).join(" ")
  let user = client.users.find(d => d.discriminator === id[0])
  if(!user) return message.reply("Añade el usuario a responder");
  if(!mensaje) return message.reply("añade mensaje")

  message.delete();
  user.send(mensaje)
}
module.exports.help = {
  name: "pm"
}