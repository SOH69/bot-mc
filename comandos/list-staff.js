const Discord = require("discord.js");
const sql2 = require("sqlite");
    sql2.open("/app/servidores2.sqlite");
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
  sql2.all(`SELECT * FROM staffs WHERE guild ="${message.guild.id}"`).then(s => {
    sql2.get(`SELECT * FROM idiomas WHERE guild ="${message.guild.id}"`).then(async(a) => {
      if (a === undefined) {
        let embed = new Discord.RichEmbed()
      .setTitle("Staff Roles")
      .setDescription("[**Bot Status**](https://stats.uptimerobot.com/oyvDnTGnV)")
      .setColor(0x66FF00)
      .addField("Name", s.map(s => s.nombre).length > 0 ? s.map(a => a.nombre).join("\n") : 'No roles added', true)
      .addField("ID", s.map(s => s.ip).length > 0 ? s.map(d => d.ip).join("\n") : "No roles added", true)
        message.channel.send(embed)
      }else if(a.idioma === "es") {
        let embed = new Discord.RichEmbed()
      .setTitle("Staff Roles")
      .setDescription("[**Estado del Bot**](https://stats.uptimerobot.com/oyvDnTGnV)")
      .setColor(0x66FF00)
      .addField("Nombre", s.map(s => s.nombre).length > 0 ? s.map(a => a.nombre).join("\n") : 'No hay roles añadidos', true)
      .addField("ID", s.map(s => s.ip).length > 0 ? s.map(d => d.ip).join("\n") : "No hay roles añadidos", true)
        message.channel.send(embed)
      }else if (a.idioma === "en") {
        let embed = new Discord.RichEmbed()
      .setTitle("Staff Roles")
      .setDescription("[**Bot Status**](https://stats.uptimerobot.com/oyvDnTGnV)")
      .setColor(0x66FF00)
      .addField("Name", s.map(s => s.nombre).length > 0 ? s.map(a => a.nombre).join("\n") : 'No roles added', true)
      .addField("ID", s.map(s => s.ip).length > 0 ? s.map(d => d.ip).join("\n") : "No roles added", true)
        message.channel.send(embed)
      }else if (a.idioma === "fr") {
        let embed = new Discord.RichEmbed()
      .setTitle("Rôles du personnel")
      .setDescription("[**Statut du bot**](https://stats.uptimerobot.com/oyvDnTGnV)")
      .setColor(0x66FF00)
      .addField("prénom", s.map(s => s.nombre).length > 0 ? s.map(a => a.nombre).join("\n") : 'Aucun rôle ajouté', true)
      .addField("ID", s.map(s => s.ip).length > 0 ? s.map(d => d.ip).join("\n") : "Aucun rôle ajouté", true)
        message.channel.send(embed)
      }
    })
  })
}
module.exports.help = {
  name: "liststaff"
}