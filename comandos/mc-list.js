const Discord = require("discord.js");
const sql = require("sqlite");
    sql.open("/app/servidores2.sqlite");
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
    sql.all(`SELECT * FROM servidores WHERE guild ="${message.guild.id}"`).then(row =>{
      
      let embed = new Discord.RichEmbed()
      .setTitle("Added Ip's")
      .setDescription("[**Bot Status**](https://stats.uptimerobot.com/oyvDnTGnV)")
      .setColor(0x66FF00)
      .addField("Name", row.map(s => s.ip).length > 0 ? row.map(a => a.nombre).join("\n") : 'No servers added', true)
      .addField("IP", row.map(s => s.ip).length > 0 ? row.map(d => d.ip).join("\n") : "No Ip's added", true)
      message.channel.send(embed)
    })
}
module.exports.help = {
  name: "list"
}