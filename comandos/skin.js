const Discord = require("discord.js");
const Gamedig = require('gamedig');
var MojangAPI = require('mojang-api');
module.exports.run = async(client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
  let autor = client.users.get(message.author.id)
  let username = message.content.split(" ").slice(1)[0]
  if(!username) return message.reply("You don't add a Nick")
  var date = new Date();
  await MojangAPI.uuidAt(username, date, async(err, res) => {
 try {
  let embed = new Discord.RichEmbed()
  .setDescription("[**Obtain the skin here**](https://visage.surgeplay.com/skin/"+res.id+")\n[**Bot Status**](https://stats.uptimerobot.com/oyvDnTGnV)")
  .setImage("https://visage.surgeplay.com/full/"+res.id+"?tilt=0")
  .setFooter(res.name)
  .setColor("GREEN")
  message.channel.send(message.author, {embed: embed})
 }catch(err) {
    let embed2 = new Discord.RichEmbed()
    .setDescription("**I don't found this nick or an error is produced**\n[**Bot Status**](https://stats.uptimerobot.com/oyvDnTGnV)")
    .setColor("RED")
    .setFooter(username)
    message.channel.send(embed2)
  } 
 })
}
module.exports.help = {
  name: "skin"
}