const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("527410443011096576")
setInterval(function() {
channel.send(`**Credit By Great Server كريدت باي قريت سرفر**`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
