const Discord = require("discord.js");
const sql = require("sqlite");
    sql.open("/app/servidores2.sqlite");
var request = require("request");
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
  let nombre = message.content.split(" ")[1]
  sql.get(`SELECT * FROM servidores WHERE nombre ="${nombre}" AND guild ="${message.guild.id}"`).then((s) => {
    if(s === undefined){
      //sin ip escrita
  message.delete();
  var mcPort = message.content.split(":")[1];
  if(mcPort === undefined) mcPort = "25565";
  var mcIP = message.content.slice(7).split(":")[0]
  var url = "http://mcapi.us/server/status?ip=" + mcIP+"&port="+mcPort;
  request(url, function(err, response, body) {
    body = JSON.parse(body);
const Gamedig = require('gamedig');
Gamedig.query({
    type: 'minecraft',
    host: mcIP,
	port: mcPort
}).then(async(state) => {
    //sin error = minecraft
	let url2 = client.users.get('507220074583687177').avatarURL
        let embed = new Discord.RichEmbed()
        .setTitle("Error, i can't find this name in the stored servers, doing ping to the written IP.")
            .setDescription(state.players < 1 ? "API CAN'T FIND PLAYERS" : "PLAYER LIST")
        .addField('**Players**', state.raw.vanilla.raw.players.online+"/"+state.raw.vanilla.raw.players.max, true)
        .addField('**IP**', state.raw.vanilla.connect, true)
        .addField('**Ping**', state.raw.vanilla.ping+"ms", true)
        .addField('**Description**', state.raw.vanilla.raw.description.translate === undefined ? state.raw.vanilla.raw.description.replace(/§0|§1|§2|§3|§4|§5|§6|§7|§8|§9|§a|§b|§c|§d|§e|§f|§k|§l|§m|§n|§o|§r/gi, "") : state.raw.vanilla.raw.description.translate.replace(/§0|§1|§2|§3|§4|§5|§6|§7|§8|§9|§a|§b|§c|§d|§e|§f|§k|§l|§m|§n|§o|§r/gi, ""))
        .addField('**Users**', state.players < 1 ? "Api cant find players" : state.players.map(s => s.name).join('\n'))
        .setColor(0x99FF00)
        .setFooter(message.author.username, message.author.avatarURL)
        .setThumbnail(url2)
        .setTimestamp(new Date())
        await message.channel.send(embed);
	
}).catch((error) => {
    console.log(error)
	message.reply("SERVER OFF\nIf u think it's an error report this to ZxFrankxZ#1332")
})
  })
  } else {
      let puerto = s.ip.split(":")[1]
      let ip = s.ip.split(":")[0]
      
  message.delete();
  var mcPort = puerto === undefined ? "25565" : puerto
  var mcIP = ip
  var url = "http://mcapi.us/server/status?ip=" + mcIP+"&port="+mcPort;
  request(url, function(err, response, body) {
    body = JSON.parse(body);
const Gamedig = require('gamedig');
Gamedig.query({
    type: 'minecraft',
    host: mcIP,
	port: mcPort
}).then(async(state) => {
	//sin error = minecraft
	let url2 = client.users.get('507220074583687177').avatarURL
        let embed = new Discord.RichEmbed()
        .setTitle("Information about server")
            .setDescription(state.players < 1 ? "API CAN'T FIND PLAYERS" : "PLAYER LIST")
        .addField('**Players**', state.raw.vanilla.raw.players.online+"/"+state.raw.vanilla.raw.players.max, true)
        .addField('**IP**', state.raw.vanilla.connect, true)
        .addField('**Ping**', state.raw.vanilla.ping+"ms", true)
        .addField('**Description**', state.raw.vanilla.raw.description.translate === undefined ? state.raw.vanilla.raw.description.replace(/§0|§1|§2|§3|§4|§5|§6|§7|§8|§9|§a|§b|§c|§d|§e|§f|§k|§l|§m|§n|§o|§r/gi, "") : state.raw.vanilla.raw.description.translate.replace(/§0|§1|§2|§3|§4|§5|§6|§7|§8|§9|§a|§b|§c|§d|§e|§f|§k|§l|§m|§n|§o|§r/gi, ""))
		.addField('**Users**', state.players < 1 ? "Api cant find players" : state.players.map(s => s.name).join('\n'))
        .setColor(0x99FF00)
        .setFooter(message.author.username, message.author.avatarURL)
        .setThumbnail(url2)
        .setTimestamp(new Date())
        await message.channel.send(embed);
	
}).catch((error) => {
    console.log(error)
	message.reply("SERVER OFF\nIf u think it's an error report this to ZxFrankxZ#1332")
})
  })
    }
  })
};


module.exports.help = {
  name: "ping"
}
