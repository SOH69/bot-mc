const Discord = require("discord.js");
const sql2 = require("sqlite");
    sql2.open("/app/servidores2.sqlite");
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
  // if(message.author.id !== "209399350600794113") return message.reply("Sorry, i'm doing changes with this command")
  if(message.author.id !== message.guild.owner.id && !message.guild.member(message.author).hasPermission('MANAGE_MESSAGES') && message.author.id !== '209399350600794113') return message.reply("This command only can be executed by the owner of the Discord server")
  let rol = message.mentions.roles.first()
  if(!rol) return message.reply("You don't mention a rol")
  let idioma;
  
  let embed = new Discord.RichEmbed()
    .setTitle()
    .setDescription()
    .setColor(0x66FF00)
    .addField("Rol", rol.name, true)
    .addField("ID", rol.id, true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setThumbnail('http://pluspng.com/img-png/png-tick-png-green-tick-png-transparent-image-500.png')
  
  sql2.run('INSERT INTO staffs (guild, ip, nombre) VALUES (?, ?, ?)', [message.guild.id, rol.id, rol.name]).then(() => {
      sql2.get(`SELECT * FROM idiomas WHERE guild ="${message.guild.id}"`).then(async(s) => {
        if(s === undefined) {
            embed.setDescription("[**Bot Status**](https://stats.uptimerobot.com/oyvDnTGnV)")
            embed.setTitle("✅ Rol added successfully")
            await message.channel.send(embed)
          }else if(s.idioma === "es") {
            embed.setDescription("[**Estado del bot**](https://stats.uptimerobot.com/oyvDnTGnV)")
            embed.setTitle("✅ Rol añadido correctamente")
            await message.channel.send(embed)
            console.log(idioma)
          }else if(s.idioma === "en") {
            embed.setDescription("[**Bot Status**](https://stats.uptimerobot.com/oyvDnTGnV)")
            embed.setTitle("✅ Rol added successfully")
            await message.channel.send(embed)
            console.log(idioma)
          }else if(s.idioma === "fr") {
            embed.setDescription("[**Statut du bot**](https://stats.uptimerobot.com/oyvDnTGnV)")
            embed.setTitle("✅ Rol ajouté avec succès")
            await message.channel.send(embed)
            console.log(idioma)
          }
      })
  })
}
module.exports.help = {
  name: "addstaff"
}