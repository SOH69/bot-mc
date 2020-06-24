const Discord = require("discord.js");
const sql2 = require("sqlite");
    sql2.open("/app/servidores2.sqlite");
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
  if(message.author.id !== message.guild.owner.id && !message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.reply("This command only can be executed by the owner of the Discord server")
  let rol = message.mentions.roles.first()
  if(!rol) return message.reply("You don't mention some role to delete")
  sql2.get("SELECT * FROM staffs WHERE guild ='"+message.guild.id+"' AND ip = '"+rol.id+"'").then((a) => {
    if(a === undefined) return message.channel.send("❌This rol don't exist")
    
    let embed = new Discord.RichEmbed()
    .setTitle()
    .setDescription()
    .setColor(0x66FF00)
    .addField("Rol", rol.name, true)
    .addField("ID", rol.id, true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setThumbnail('http://pluspng.com/img-png/png-tick-png-green-tick-png-transparent-image-500.png')

    sql2.run("DELETE FROM staffs WHERE guild = '"+message.guild.id+"' AND ip = '"+rol.id+"'").then(() => {
      sql2.get(`SELECT * FROM idiomas WHERE guild ="${message.guild.id}"`).then(async(g) => {
        if(g === undefined) {
             embed.setTitle("✅ Rol removed successfully")
            await message.channel.send(embed)
          }else if(g.idioma === "es") {
            embed.setDescription("[**Estado del bot**](https://stats.uptimerobot.com/oyvDnTGnV)")
            embed.setTitle("✅ Rol eliminado correctamente")
            await message.channel.send(embed)
          }else if(g.idioma === "en") {
            embed.setDescription("[**Bot Status**](https://stats.uptimerobot.com/oyvDnTGnV)")
            embed.setTitle("✅ Rol removed successfully")
            await message.channel.send(embed)
          }else if(g.idioma === "fr") {
            embed.setDescription("[**Statut du bot**](https://stats.uptimerobot.com/oyvDnTGnV)")
            embed.setTitle("✅ Rol enlevé avec succès")
            await message.channel.send(embed)
          }
      })
    })
      })
}
module.exports.help = {
  name: "delstaff"
}