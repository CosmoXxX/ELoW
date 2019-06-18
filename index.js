const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Coucou');
});

const settings = {
    prefix: ''',
    token:'NTkwNTYwNDQwNjU2ODU1MDUz.XQkAag.Jqcj6743NWDGFrdhkFpLOoCsyYs'
  }
  client.on('message', async message => {
    var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];
    var args = message.content.split(' ').slice(1);
    if(message.author.bot) return;
    if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

if(command === "coucou") {
message.channel.send("salut")
}

});

client.login(settings.token);
 
