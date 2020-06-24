const Discord = require("discord.js");
const sql2 = require("sqlite");
    sql2.open("/app/servidores2.sqlite");
module.exports.run = (client, message, args) => {
  sql2.all(`SELECT * FROM idiomas`).then(d => {
    console.log(d)
  })
}
module.exports.help = {
  name: "test"
}