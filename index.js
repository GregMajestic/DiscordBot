const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log('I am ready!');
  });
  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'general');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
});
client.login('NTAzNDMxMzY2OTU3MDcyMzg1.Dq_SYA.hkaSTYxuL9kRTgLIGgEq5q1jl2o');
