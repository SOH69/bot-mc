const Discord = require("discord.js");
var MojangAPI = require('mojang-api');
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
  let autor = client.users.get(message.author.id)
  let username = message.content.split(" ").slice(1)[0]
  if(!username) return message.reply("You don't add a Nick")
  let embed2 = new Discord.RichEmbed()
    .setDescription("**I don't found this nick**\n[**Bot Status**](https://stats.uptimerobot.com/oyvDnTGnV)")
    .setColor("RED")
    .setFooter(username)
  var date = new Date();
  MojangAPI.uuidAt(username, date, function(err, res) {
    if (err)
        //console.log(err);
    if (res === undefined) return message.channel.send(embed2)
    MojangAPI.nameHistory(res.id, function(err2, res2) {
      if (err2)
        console.log(err);
      else{
        //res2.map(d => d.name).join("\n")
        let embed2 = new Discord.RichEmbed()
        .setTitle("Nicks of "+username)
        .setDescription("[**Bot Status**](https://stats.uptimerobot.com/oyvDnTGnV)")
        .setColor(0x66FF00)
        .addField("Current nick ", username,false)
        .addField("Old nicks", res2.map(z=> z.name).length > 1 ? res2.map(d => d.name).slice(0, parseInt(res2.map(s=> s.name).length)-1) : "This nick don't have old nicks",false)
        message.channel.send(embed2)
      }
    })
  })
}
module.exports.help = {
  name: "names"
}