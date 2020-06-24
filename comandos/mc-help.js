const Discord = require("discord.js");
const sql2 = require("sqlite");
    sql2.open("/app/servidores2.sqlite");
module.exports.run = (client, message, args) => {
  if(message.channel.type === "dm") return message.reply("you can't use that in DM");
  sql2.get(`SELECT * FROM idiomas WHERE guild ="${message.guild.id}"`).then(async(s) => {
    if(s === undefined) {
    let embed = new Discord.RichEmbed()
    .setTitle("Commands List")
    .setColor(0x006699)
    .setDescription('```md\n[m/help](See the avalible command)\n[m/addserver IP Name](Add some server to do ping)\n[m/delserver Name](Remove some stored server)\n[m/ping Name](Ping to some server stored with m/addserver)\n[m/list](See your stored servers)\n[m/addstaff @rol](Add some rol to allow to access to the command m/addserver and m/delserver)\n[m/delstaff @rol](Remove a rol added previously)\n[m/liststaff](See the current roles are allowed to access to the commands m/addserver and m/delstaff)\n[m/ping IP](Do ping to any IP)\n[m/names nickname](See the current names and last names of a PREMIUM user. Example: m/names ZxFrankxZ)\n[m/skin nickname](See the current skin of a PREMIUM user. Example: m/skin ZxFrankxZ)\n[m/language](Set the language to Spanish, English or Franch. Default => English)```\n[**Bot Status**](https://stats.uptimerobot.com/oyvDnTGnV)')
    .addField('Support', '[Support Discord](https://discord.gg/NNCgDeN)\nIf you find some bug/error pls report this')
    .setFooter(message.author.tag, message.author.avatarURL)
    message.channel.send(embed)
    }else if(s.idioma === "en") {
    let embed = new Discord.RichEmbed()
    .setTitle("Commands List")
    .setColor(0x006699)
    .setDescription('```md\n[m/help](See the avalible command)\n[m/addserver IP Name](Add some server to do ping)\n[m/delserver Name](Remove some stored server)\n[m/ping Name](Ping to some server stored)\n[m/list](See your stored servers)\n[m/addstaff @rol](Add some rol to allow to access to the command m/addserver and m/delserver)\n[m/delstaff @rol](Remove a rol added previously)\n[m/liststaff](See the current roles are allowed to access to the commands m/addserver and m/delstaff)\n[m/ping IP](Do ping to any IP)\n[m/names nickname](See the current names and last names of a PREMIUM user. Example: m/names ZxFrankxZ)\n[m/skin nickname](See the current skin of a PREMIUM user. Example: m/skin ZxFrankxZ)\n[m/language](Set the language to Spanish, English or French. Default => English)```\n[**Bot Status**](https://stats.uptimerobot.com/oyvDnTGnV)')
    .addField('Support', '[Support Discord](https://discord.gg/NNCgDeN)\nIf you find some bug/error pls report this')
    .setFooter(message.author.tag, message.author.avatarURL)
    message.channel.send(embed)
    }else if(s.idioma === "es") {
    let embed = new Discord.RichEmbed()
    .setTitle("Lista de comandos")
    .setColor(0x006699)
    .setDescription('```md\n[m/help](Consulte los comandos disponibles)\n[m/addserver IP Nombre]((Agregue un servidor para hacer ping)\n[m/delserver Nombre](Eliminar sevidor guardado)\n[m/ping Name](Haga ping a algun sevidor guardado)\n[m/list](Vea sus servidores guardados)\n[m/addstaff @rol](Agregue un rol para permitir el acceso al comando m/addserver y m/delserver)\n[m/delstaff @rol](Quite un rol agregado previamente)\n[m/liststaff](Ver los roles actuales que tienen acceso a m/addserver y m/delstaff)\n[m/ping IP](Hacer ping a cualquier IP)\n[m/names nickname](Ver el nombre actual y los pasados nombres de un usuario PREMIUM. Example: m/names ZxFrankxZ)\n[m/skin nickname](Ver la skin actual de un usuario PREMIUM. Example: m/skin ZxFrankxZ)\n[m/language](Establece el idioma a Español, Ingles o Frances. Por defecto => Ingles)```\n[**Estado del Bot**](https://stats.uptimerobot.com/oyvDnTGnV)')
    .addField('Soporte', '[Support Discord](https://discord.gg/NNCgDeN)\nSi encuentras un error reportalo en mi discord')
    .setFooter(message.author.tag, message.author.avatarURL)
    message.channel.send(embed)
    }else if(s.idioma === "fr") {
    let embed = new Discord.RichEmbed()
    .setTitle("Liste de commandes")
    .setColor(0x006699)
    .setDescription("```md\n[m/help](Voir la commande disponible)\n[m/addserver IP prénom](Ajouter un serveur pour faire un ping)\n[m/delserver prénom](Supprimer un serveur stocké)\n[m/ping prénom](Ping vers un serveur stocké)\n[m/list](Voir vos serveurs stockés)\n[m/addstaff @rol](Ajouter un rôle pour autoriser l'accès à la commande m/addserver et m/delserver)\n[m/delstaff @rol](Supprimer un rôle ajouté précédemment)\n[m/liststaff](Voir les rôles actuels sont autorisés à accéder aux commandes m/addserver et m/delstaff)\n[m/ping IP](Faire un ping à n'importe quelle adresse IP)\n[m/names nickname](Faire un ping à n'importe quelle adresse IP PREMIUM user. Example: m/names ZxFrankxZ)\n[m/skin nickname](SVoir la peau actuelle d'un utilisateur PREMIUM. Example: m/skin ZxFrankxZ)\n[m/languages](Définissez la langue sur espagnol, anglais ou français. Par défaut => anglais)```\n[**Statut du bot**](https://stats.uptimerobot.com/oyvDnTGnV)")
    .addField('Soutien', '[Support Discord](https://discord.gg/NNCgDeN)\nSi vous trouvez une erreur, merci de signaler ceci')
    .setFooter(message.author.tag, message.author.avatarURL)
    message.channel.send(embed)
    }
  })
}
module.exports.help = {
  name: "help"
}