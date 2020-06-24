const Discord = require("discord.js");
const Gamedig = require('gamedig');
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
      if (message.author.id !== '209399350600794113') return message.channel.send("`Este comando no esta permitido a nadie excepto a ZxFrankxZ`");  
    let limit = 1950;
    try {
        let code = args;
        let evalued = eval(code);
        if (typeof evalued !== "string")
            evalued = require("util").inspect(evalued);
        let txt = "" + evalued;
        if (txt.length > limit) {
            message.channel.send(`\`\`\`js\n ${txt.slice(0, limit)}\n\`\`\``);
        }
        else
            message.channel.send(`\`\`\`js\n ${txt}\n\`\`\``);
    } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`js\n${err}\n\`\`\``);
    }
}
module.exports.help = {
  name: "eval"
}