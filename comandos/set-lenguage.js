const Discord = require("discord.js");
const sql2 = require("sqlite");
    sql2.open("/app/servidores2.sqlite");
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
  //if(message.author.id !== '209399350600794113') return;
  /*let guildss = client.guilds.map(i => i.id)
  for(let i = 0; i < guildss.length; i++) {
    if(client.guilds.get(guildss[i]).channels.find(a => a.name === 'update-minecraft-bot') !== null) {
    client.guilds.get(guildss[i]).channels.find(a => a.name === 'update-minecraft-bot').delete();
    client.guilds.get('507220891894284328').channels.get('508073907522371595').send('canal borrado en la guild **'+guildss[i]+'**')
    }
  }*/
  // sql2.run("CREATE TABLE idiomas (guild TEXT, idioma TEXT)")
 let a = message.content.toLowerCase().split(" ").slice(1).join(" ");
  if(a === "es" || a === "en" || a === "fr") {
    sql2.get(`SELECT * FROM idiomas WHERE guild ="${message.guild.id}"`).then(d => {
      //console.log(d)
    if(d === undefined) {
      sql2.run('INSERT INTO idiomas (guild, idioma) VALUES (?, ?)', [message.guild.id, a]).then(b => {
        if(a === "en") {
          message.channel.send("Language set to English")
        }else if(a === "es") {
          message.channel.send("Idioma establecido en Español")
        }else if(a === "fr") {
          message.channel.send("Langue réglée en Français")
        }
      })
    }else {
    sql2.run(`UPDATE idiomas SET idioma ="${a}" WHERE guild ="${message.guild.id}"`).then(() => {
    if(a === "en") {
      message.channel.send("Language set to English")
    }else if(a === "es") {
      message.channel.send("Idioma establecido en Español")
    }else if(a === "fr") {
      message.channel.send("Langue réglée en Français")
    }
      })
    }
    })
  }else{
    sql2.get(`SELECT * FROM idiomas WHERE guild ="${message.guild.id}"`).then(d => {
      if(d === undefined) {
        message.channel.send("The available languages are: **es(Spanish)**, **en(English)** and **fr(French)**")
      }else if(d.idioma === "en") {
        message.channel.send("The available languages are: **es(Spanish)**, **en(English)** and **fr(French)**")
      }else if(d.idioma === "es") {
        message.channel.send("Los idiomas disponibles son: **es(Español)**, **en(Ingles)**, y **fr(Frances)**")
      }else if(d.idioma === "fr") {
        message.channel.send("Les langues disponibles sont: **es(Espanol)**, **en(Anglais)**, y **fr(Français)**")
      }
    })
  }
}
module.exports.help = {
  name: "language"
}