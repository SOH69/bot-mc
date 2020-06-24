const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
  
  let guildss = client.guilds.map(i => i.id)
    for(let i = 0; i < guildss.length; i++) {
      if(client.guilds.get(guildss[i]).channels.find(a => a.name === 'update-minecraft-bot') !== null) {
      client.guilds.get(guildss[i]).channels.find(a => a.name === 'update-minecraft-bot').delete();
      client.guilds.get('507220891894284328').channels.get('508073907522371595').send('canal borrado en la guild **'+guildss[i]+'**')
      }
    }
}
module.exports.help = {
  name: "channeldel"
}