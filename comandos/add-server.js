const Discord = require("discord.js");
const Gamedig = require('gamedig');
const sql = require("sqlite");
    sql.open("/app/servidores2.sqlite");
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
  sql.get(`SELECT * FROM idiomas WHERE guild ="${message.guild.id}"`).then((asd) => {
    //console.log(asd)
  sql.all(`SELECT * FROM staffs WHERE guild ="${message.guild.id}"`).then(s => {
    if(asd === undefined) {
      let roles = s.map(d => d.nombre)
      if(!message.guild.member(message.author).roles.some(v =>roles.includes(v.name))) return message.reply("❌ You don't have the proper role")
    let ip = message.content.split(" ")[1]
    let nombre = message.content.split(" ")[2]
  if(!ip) return message.reply("You don't add some ip to store")
  if(!nombre) return message.reply("You don't add some name to store")
  sql.get(`SELECT * FROM servidores WHERE ip ="${ip.toLowerCase()}" AND guild ="${message.guild.id}"`).then((s) => {
    if(s !== undefined) {
      message.channel.send('❌ This ip is already added')
    } else {
    sql.run('INSERT INTO servidores (guild, ip, nombre) VALUES (?, ?, ?)', [message.guild.id, ip.toLowerCase(), nombre.toLowerCase()]).then(() => {
    let embed = new Discord.RichEmbed()
    .setTitle("✅ Server added successfully")
    .setDescription("[**Bot Status**](https://stats.uptimerobot.com/oyvDnTGnV)")
    .setColor(0x66FF00)
    .addField("IP", ip.toLowerCase(), true)
    .addField("Name", nombre.toLowerCase(), true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setThumbnail('http://pluspng.com/img-png/png-tick-png-green-tick-png-transparent-image-500.png')
    message.channel.send(embed)
  })
    }
  })
  }
    if(asd.idioma === "es") {
      let roles = s.map(d => d.nombre)
      if(!message.guild.member(message.author).roles.some(v =>roles.includes(v.name))) return message.reply("❌ No tienes el rol apropiado")
    let ip = message.content.split(" ")[1]
    let nombre = message.content.split(" ")[2]
  if(!ip) return message.reply("No has añadido una ip para guardarla")
  if(!nombre) return message.reply("No has añadido un nombre para guardarlo")
  sql.get(`SELECT * FROM servidores WHERE ip ="${ip.toLowerCase()}" AND guild ="${message.guild.id}"`).then((s) => {
    if(s !== undefined) {
      message.channel.send('❌ Esta ip ya esta añadida')
    } else {
    sql.run('INSERT INTO servidores (guild, ip, nombre) VALUES (?, ?, ?)', [message.guild.id, ip.toLowerCase(), nombre.toLowerCase()]).then(async() => {
    let embed = new Discord.RichEmbed()
    .setTitle("✅ Servidor añadido correctamente")
    .setDescription("[**Estado del Bot**](https://stats.uptimerobot.com/oyvDnTGnV)")
    .setColor(0x66FF00)
    .addField("IP", ip.toLowerCase(), true)
    .addField("Nombre", nombre.toLowerCase(), true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setThumbnail('http://pluspng.com/img-png/png-tick-png-green-tick-png-transparent-image-500.png')
    await message.channel.send(embed)
  })
    }
  })
  }
    if(asd.idioma === "en") {
      let roles = s.map(d => d.nombre)
      if(!message.guild.member(message.author).roles.some(v =>roles.includes(v.name))) return message.reply("❌ You don't have the proper role")
    let ip = message.content.split(" ")[1]
    let nombre = message.content.split(" ")[2]
  if(!ip) return message.reply("You don't add some ip to store")
  if(!nombre) return message.reply("You don't add some name to store")
  sql.get(`SELECT * FROM servidores WHERE ip ="${ip.toLowerCase()}" AND guild ="${message.guild.id}"`).then((s) => {
    if(s !== undefined) {
      message.channel.send('❌ This ip is already added')
    } else {
    sql.run('INSERT INTO servidores (guild, ip, nombre) VALUES (?, ?, ?)', [message.guild.id, ip.toLowerCase(), nombre.toLowerCase()]).then(() => {
    let embed = new Discord.RichEmbed()
    .setTitle("✅ Server added successfully")
    .setDescription("[**Bot Status**](https://stats.uptimerobot.com/oyvDnTGnV)")
    .setColor(0x66FF00)
    .addField("IP", ip.toLowerCase(), true)
    .addField("Name", nombre.toLowerCase(), true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setThumbnail('http://pluspng.com/img-png/png-tick-png-green-tick-png-transparent-image-500.png')
    message.channel.send(embed)
  })
    }
  })
  }
    if(asd.idioma === "fr") {
      let roles = s.map(d => d.nombre)
      if(!message.guild.member(message.author).roles.some(v =>roles.includes(v.name))) return message.reply("❌ Vous n'avez pas le rôle approprié")
    let ip = message.content.split(" ")[1]
    let nombre = message.content.split(" ")[2]
  if(!ip) return message.reply("Vous n'ajoutez pas une adresse IP pour stocker")
  if(!nombre) return message.reply("Vous n'ajoutez pas de nom à stocker")
  sql.get(`SELECT * FROM servidores WHERE ip ="${ip.toLowerCase()}" AND guild ="${message.guild.id}"`).then((s) => {
    if(s !== undefined) {
      message.channel.send('❌ Cette ip est déjà ajoutée')
    } else {
    sql.run('INSERT INTO servidores (guild, ip, nombre) VALUES (?, ?, ?)', [message.guild.id, ip.toLowerCase(), nombre.toLowerCase()]).then(() => {
    let embed = new Discord.RichEmbed()
    .setTitle("✅ Serveur ajouté avec succès")
    .setDescription("[**Statut du bot**](https://stats.uptimerobot.com/oyvDnTGnV)")
    .setColor(0x66FF00)
    .addField("IP", ip.toLowerCase(), true)
    .addField("prénom", nombre.toLowerCase(), true)
    .setFooter(message.author.username, message.author.avatarURL)
    .setThumbnail('http://pluspng.com/img-png/png-tick-png-green-tick-png-transparent-image-500.png')
    message.channel.send(embed)
  })
    }
  })
  }
  })
  })
}
module.exports.help = {
  name: "addserver"
}