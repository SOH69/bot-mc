const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
  if(message.author.id !== '209399350600794113') return;
    message.delete()
  let mensaje = message.content.split(" ").slice(1).join(" ")
  if(!mensaje) return message.reply("Añade un mensaje");
  for(let i = 0; i < client.guilds.map(d => d.name).length ; i++){
    client.guilds.get(client.guilds.map(r => r.id)[i]).createChannel('update-minecraft-bot', 'text', [{
  id: client.guilds.map(r => r.id)[i],
  deny: ['SEND_MESSAGES']
}]).then(async(a) => {
    await a.send("**This channel will be delete in 15m**\n**ZxFrankxZ#1332**\n\n"+mensaje)
    function delchannel() {
      let guildss = client.guilds.map(i => i.id)
    for(let i = 0; i < guildss.length; i++) {
      if(client.guilds.get(guildss[i]).channels.find(a => a.name === 'update-minecraft-bot') !== null) {
      client.guilds.get(guildss[i]).channels.find(a => a.name === 'update-minecraft-bot').delete();
      client.guilds.get('507220891894284328').channels.get('508073907522371595').send('canal borrado en la guild **'+guildss[i]+'**')
      }
    }
  }
    setTimeout(delchannel, 900000)
  })
  }
}
module.exports.help = {
  name: "updates"
}