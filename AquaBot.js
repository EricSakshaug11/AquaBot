var Discord = require('discord.js');
var auth = require('./auth.json');
var convert = require('./convert.js');
var bot = new Discord.Client({
  token: auth.token,
  autorun: true
});

bot.on('ready', () =>{
  console.log(`logged in as ${bot.user.tag}!`);
});

bot.on('message', msg =>{
  if(msg.content === 'ping'){
    msg.reply('Pong!');
  }else if(msg.substring(0,1) == '!'){
    var args = message.substring(1).split(' '); //The ! gets dropped here, with substring(1) 
    var cmd = args[0];
    args = args.splice(1); //Removes the initial command from the args array, as it's already stored in cmd.
    switch(cmd){
      case 'convert':
                                
    }
  }
});