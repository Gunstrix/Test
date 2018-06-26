const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "!"

bot.on("message", message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const sender = message.author();
  if(message.channel.type === "dm") return;
  if (!message.content.startsWith(prefix)) return;
  
  if(command == "ping") {
    
    message.channel.send("Pong!")
  
  }
  
  });
  bot.login(process.env.BOT_TOKEN)
